import React from "react";
import "./App.css";
import ActionProvider from "./Components/ActionProvider";
import MessageParser from "./Components/MessageParser";
import config from "./Components/config";
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
