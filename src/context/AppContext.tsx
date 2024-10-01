import React, { createContext, useState, ReactNode } from "react";
import { generateAnswer } from "../service/index";

interface Conversation {
  message: string;
  response: string;
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

  const onSubmitPrompt = async (value: string) => {
    setIsLoading(true);
    setRecentPrompts((r) => [...r, value]);
    const result = await generateAnswer(value);
    const {
      data: { response },
      success,
    } = result;

    if (success) {
      setIsLoading(false);
      setPromptResult(response);
      setConversations((c) => [...c, { message: value, response }]);
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
    </AppContext.Provider>
  );
};
