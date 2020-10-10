import React from "react";
import "../styles/LearningOptions.css";
import axios from "axios";
const AppointmentOption = (props) => {
  const { list } = props;
  const options = list.map((i) => ({
    question: i.question,
    answer: i.answer,
    handler: ()=>props.actionProvider.handleAnswers(i.answer),
  }));
  const optionsMarkup = options.map((option, index) => (
    <button
      className="learning-option-button"
      key={option.index}
      onClick={option.handler}
    >
      {option.question}
    </button>
  ));
  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default AppointmentOption;
