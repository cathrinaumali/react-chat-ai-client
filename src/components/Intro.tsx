import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./Intro.styles.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const logicalQuestions = [
  "What is the fundamental nature of reality?",
  "Is there a universal moral code, or are ethics relative to different cultures and societies?",
  "How can we balance economic growth with environmental sustainability?",
  "What is the meaning of life?",
];
export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%" }} className="intro-container">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={12}>
          <Item className="intro-header">
            <Typography>
              {" "}
              <span>Hi there,</span>
            </Typography>
            <Typography> How can I help you today?</Typography>
          </Item>
        </Grid>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
          }}
        >
          {logicalQuestions.map((item) => {
            return (
              <Item sx={{ minHeight: "180px", backgroundColor: "#f0f4f9" }}>
                <Typography> {item}</Typography>
              </Item>
            );
          })}
        </Box>
      </Grid>
    </Box>
  );
}
