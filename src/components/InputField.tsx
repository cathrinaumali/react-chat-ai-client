import React from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface InputFieldProps {
  placeholder?: string;
  inputText?: string;
  isDisabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function InputField({
  isDisabled = true,
  placeholder = "Ask Anything...",
  inputText = "",
  onChange,
  onButtonClick,
}: InputFieldProps) {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      value={inputText}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              variant="contained"
              color="primary"
              disabled={isDisabled}
              onClick={onButtonClick}
            >
              <ArrowUpwardIcon />
            </Button>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
}
