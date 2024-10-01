import React, { useState } from "react";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";

interface FormProps {
  minRows?: number;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({
  placeholder = "Ask anything!",
  minRows = 4,
  onChange,
  onSubmit,
}: FormProps) {
  return (
    <Box
      sx={{
        py: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit?.(event);
        }}
      >
        <Textarea
          placeholder={placeholder}
          required
          sx={{ mb: 1 }}
          minRows={minRows}
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}
