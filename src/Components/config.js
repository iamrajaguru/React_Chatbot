import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import AppointmentOption from "./AppointmentOption";
const config = {
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?"),
  ],
  state: {
    list: [],
  },
  widgets: [
    {
      widgetName: "appointment",
      widgetFunc: (props) => <AppointmentOption {...props} />,
      mapStateToProps: ["list"],
    },
  ],
};

export default config;
