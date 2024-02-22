import { useState } from "react";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import Chatbot from "./components/Chatbot";
import { Route, Routes } from "react-router-dom";
import WebsiteScrap from "./components/WebsiteScrap";


function App() {


  return (
    <main>
      <h1>Website Chatbot</h1>
      <div>
        <Routes>
          <Route path="/" element={<Chatbot />} />
          <Route path="/configure" element={<WebsiteScrap />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
