import React from "react";
import ChatPage from "./page/chatPage";

import { AppContextProvider } from "./context/AppContext";
import AppThemeProvider from "./context/AppThemeProvider";

export default function App() {
  return (
    <AppThemeProvider>
      <AppContextProvider>
        <ChatPage />
      </AppContextProvider>
    </AppThemeProvider>
  );
}
