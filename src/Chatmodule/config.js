import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import AppointmentOption from "./AppointmentOption";

import LearningOptions from "./LearningOptions";
import LinkList from "./LinkList";
const config = {
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", 
    // {
    //   widget: "learningOptions",
    // }
    ),
  ],
  state: {
    list: [],
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "appointment",
      widgetFunc: (props) => <AppointmentOption {...props} />,
      mapStateToProps:["list"]
    },
  ],
};

export default config;
