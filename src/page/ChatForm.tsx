import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import InputField from "../components/InputField";

interface ChatFormProps {}

export default function ChatForm({}: ChatFormProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const contextData = useContext(AppContext);
  const { promptResult, isLoading, recetPrompts, onSubmitPrompt } =
    contextData || {};

  console.log(recetPrompts);

  return (
    <React.Fragment>
      <Typography sx={{ marginBottom: 2 }}>{promptResult}</Typography>
      <InputField
        isDisabled={inputValue === ""}
        inputText={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onButtonClick={(event) => {
          event.preventDefault();
          onSubmitPrompt(inputValue);
          setInputValue("");
        }}
      />
    </React.Fragment>
  );
}
