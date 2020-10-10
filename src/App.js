import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ActionProvider from "./Chatmodule/ActionProvider";
import MessageParser from "./Chatmodule/MessageParser";
import config from "./Chatmodule/config";
import Chatbot from "react-chatbot-kit";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default App;
