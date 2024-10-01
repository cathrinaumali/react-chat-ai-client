import { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";

import "./App.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
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
          console.log(inputValue);
        }}
      >
        <Textarea
          placeholder="Ask anything!"
          required
          sx={{ mb: 1 }}
          minRows={4}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}
