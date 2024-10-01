import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

// import Typography from "@mui/material/Typography";
import Box from "@mui/joy/Box";
// import Stack from "@mui/joy/Stack";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Typography from "@mui/joy/Typography";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import InputField from "../components/InputField";
import Layout from "../components/Layout";

import "./chatPage.styles.scss";

interface ChatPageProps {}

export default function ChatPage({}: ChatPageProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const contextData = useContext(AppContext);
  const { promptResult, isLoading, conversations, onSubmitPrompt } =
    contextData || {};

  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gap: 2,
          fontFamily: "Montserrat, sans-serif",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Stack spacing={1}>
          <Card
            variant="soft"
            className="message-container"
            sx={{ width: "50%" }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>
          <Card variant="plain" className="response-container">
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>
          <Card
            variant="soft"
            className="message-container"
            sx={{ width: "50%" }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>
          <Card variant="plain" className="response-container">
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>{" "}
          <Card
            variant="soft"
            className="message-container"
            sx={{ width: "50%" }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>
          <Card variant="plain" className="response-container">
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>{" "}
          <Card
            variant="soft"
            className="message-container"
            sx={{ width: "50%" }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>
          <Card variant="plain" className="response-container">
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>{" "}
          <Card
            variant="soft"
            className="message-container"
            sx={{ width: "50%" }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>
          <Card variant="plain" className="response-container">
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>{" "}
          <Card
            variant="soft"
            className="message-container"
            sx={{ width: "50%" }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>
          <Card variant="plain" className="response-container">
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>{" "}
          <Card
            variant="soft"
            className="message-container"
            sx={{ width: "50%" }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>
          <Card variant="plain" className="response-container">
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>{" "}
          <Card
            variant="soft"
            className="message-container"
            sx={{ width: "50%" }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>
          <Card variant="plain" className="response-container">
            <CardContent>
              <Typography sx={{ fontWeight: "normal" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Typography>
            </CardContent>
          </Card>
        </Stack>

        {conversations.map((item, i) => {
          return (
            <Layout key={i}>
              <Card className="message-container">
                <CardContent>
                  <Typography>{item.message}.</Typography>
                </CardContent>
              </Card>
              <Card className="response-container">
                <CardContent>
                  <Typography>{item.response}.</Typography>
                </CardContent>
              </Card>
            </Layout>
          );
        })}
      </Box>

      <InputField
        className="input-container"
        isDisabled={inputValue === ""}
        inputText={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onButtonClick={(event) => {
          event.preventDefault();
          onSubmitPrompt(inputValue);
          setInputValue("");
        }}
      />
    </Layout>
  );
}
