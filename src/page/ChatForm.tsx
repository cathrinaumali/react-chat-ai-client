import React, { useState } from "react";

import Form from "../components/Form";
import { generateAnswer } from "../service/index";

interface ChatFormProps {}

export default function ChatForm({}: ChatFormProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = async (value: string) => {
    const answer = await generateAnswer(value);
    console.log(answer);
  };

  return (
    <div>
      <Form
        onChange={(event) => setInputValue(event.target.value)}
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(inputValue);
        }}
      />
    </div>
  );
}
