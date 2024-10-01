import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

import Box from "@mui/joy/Box";
import Typewriter from "typewriter-effect";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import InputField from "../components/InputField";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import { formatResponse } from "../utils/helper";
import { assets } from "../assets/assets";
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
          marginBottom: "20px",
        }}
      >
        {conversations?.length === 0 ? (
          <Intro />
        ) : (
          <Stack spacing={1} className="message-response--container">
            {conversations.map((item, i) => {
              const formattedResponse = formatResponse(item.response as string);
              return (
                <React.Fragment key={i}>
                  <Card
                    className="message-container"
                    sx={{ maxWidth: "50%", minWidth: "10%" }}
                  >
                    <CardContent sx={{ paddingBottom: 0 }}>
                      <Typography>{item.message}</Typography>
                    </CardContent>
                  </Card>
                  <Card className="response-container">
                    <CardContent sx={{ display: "flex", gap: "20px" }}>
                      <img
                        src={assets.gemini_icon}
                        alt="Description of the image"
                        height={30}
                      />
                      {item.loadingResponse ? (
                        <Stack
                          sx={{
                            width: "100%",
                            color: "grey.500",
                          }}
                          spacing={2}
                        >
                          <LinearProgress color="inherit" />
                          <LinearProgress color="inherit" />
                          <LinearProgress color="inherit" />
                        </Stack>
                      ) : (
                        <Typography sx={{ fontWeight: "normal" }}>
                          {item.response ? (
                            <Typewriter
                              onInit={(typewriter) => {
                                typewriter
                                  .typeString(formattedResponse as string)
                                  .callFunction(() => {
                                    console.log("String typed out!");
                                  })
                                  .callFunction(() => {
                                    console.log("All strings were deleted");
                                  })
                                  .start();
                              }}
                              options={{
                                delay: 0,
                                cursorClassName: "typeWritterClass",
                              }}
                            />
                          ) : null}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </React.Fragment>
              );
            })}
          </Stack>
        )}
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
