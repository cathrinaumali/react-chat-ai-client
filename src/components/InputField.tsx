import React from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#f4f4f4", // Add background color
    borderRadius: "26px", // Add rounded corners
    paddingLeft: "20px",

    "& fieldset": {
      border: "none", // Remove the default border
    },
    "&:hover fieldset": {
      border: "none", // Remove border on hover
    },
    "&.Mui-focused fieldset": {
      border: "none", // Remove border on focus (active)
    },
  },
});

interface InputFieldProps {
  placeholder?: string;
  inputText?: string;
  className?: string;
  isDisabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function InputField({
  isDisabled = true,
  placeholder = "Ask Anything...",
  inputText = "",
  className,
  onChange,
  onButtonClick,
}: InputFieldProps) {
  return (
    <StyledTextField
      className={className}
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
              sx={{
                minWidth: 0, // Ensure width and height are equal
                width: 36, // Adjust size for a circular button
                height: 36, // Same height as width for a circle
                borderRadius: "50%", // Make it a circle
                padding: 0, // Remove extra padding
              }}
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
