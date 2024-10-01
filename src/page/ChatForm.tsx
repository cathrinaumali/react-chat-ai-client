import React, { useState, useContext } from "react";

import InputField from "../components/InputField";
import Typography from "@mui/material/Typography";

import { generateAnswer } from "../service/index";
import { TextField, Button, InputAdornment } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { AppContext } from "../context/AppContext";

interface ChatFormProps {}

export default function ChatForm({}: ChatFormProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [promptResult, setPromptResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contextData = useContext(AppContext);

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
    <div>
      <Typography sx={{ marginBottom: 2 }}>{promptResult}</Typography>
      <InputField
        inputText={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onButtonClick={(event) => {
          event.preventDefault();
          onSubmitPrompt(inputValue);
        }}
      />
    </div>
  );
}
