import React, { createContext, useState, ReactNode } from "react";
import { generateAnswer } from "../service/index";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

interface Conversation {
  message: string;
  response?: string | undefined;
  loadingResponse: boolean;
}
// Define the shape of the context data
export interface AppContextType {
  isLoading: boolean;
  promptResult: string;
  recetPrompts: string[];
  conversations: Conversation[];
  onSubmitPrompt: (newValue: string) => void;
}

const defaultValue: AppContextType = {
  isLoading: false,
  promptResult: "",
  recetPrompts: [],
  conversations: [],
  onSubmitPrompt: (newValue: string) => newValue,
};

// Create the context with default values
export const AppContext = createContext<AppContextType>(defaultValue);

// Create a provider component
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [promptResult, setPromptResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recetPrompts, setRecentPrompts] = useState<string[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState<boolean>(false);

  const onSubmitPrompt = async (value: string) => {
    setIsLoading(true);
    setRecentPrompts((r) => [...r, value]);
    setConversations((c) => [
      ...c,
      { message: value, loadingResponse: true, response: undefined },
    ]);
    try {
      const result = await generateAnswer(value);
      const {
        data: { response },
        success,
      } = result;
      console.log(result);

      if (success) {
        setIsLoading(false);
        setPromptResult(response);
        setConversations((convo) => {
          const findLoading = convo.map((c: Conversation) => {
            if (c.loadingResponse === true && c.response === undefined) {
              return { ...c, loadingResponse: false, response };
            }
            return c;
          });
          return findLoading;
        });
      }
    } catch (error) {
      setIsSnackBarOpen(true);
      setConversations((convo) => {
        const findLoading = convo.map((c: Conversation) => {
          if (c.loadingResponse === true && c.response === undefined) {
            return { ...c, loadingResponse: false, response: "Error" };
          }
          return c;
        });
        return findLoading;
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        recetPrompts,
        promptResult,
        conversations,
        onSubmitPrompt,
      }}
    >
      {children}
      <Snackbar
        autoHideDuration={4000}
        open={isSnackBarOpen}
        message="Failed to generate response!"
        color={"danger"}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setIsSnackBarOpen(false);
        }}
      />
    </AppContext.Provider>
  );
};
