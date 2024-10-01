import React, { createContext, useState, ReactNode } from "react";
import { generateAnswer } from "../service/index";

// Define the shape of the context data
interface AppContextType {
  value: string;
  setValue: (newValue: string) => void;
}

// Create the context with default values
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState<string>("Hello, World!");
  const [inputValue, setInputValue] = useState<string>("");
  const [promptResult, setPromptResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmitPrompt = async (value: string) => {
    setIsLoading(true);
    const result = await generateAnswer(value);
    const {
      data: { response },
      success,
    } = result;

    if (success) {
      setIsLoading(false);
      setPromptResult(response);
      console.log(response);
    }
  };

  return (
    <AppContext.Provider value={{ isLoading, onSubmitPrompt }}>
      {children}
    </AppContext.Provider>
  );
};
