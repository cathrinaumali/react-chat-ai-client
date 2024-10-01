import React from "react";
import ChatForm from "./page/ChatForm";
// import "./App.css";

import Layout from "./components/Layout";
import { AppContextProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <Layout>
        <ChatForm />
      </Layout>
    </AppContextProvider>
  );
}
