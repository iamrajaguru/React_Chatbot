import React from "react";
import "../styles/AppointmentOption.css";

const AppointmentOption = (props) => {
  const { list } = props;
  const options = list.map((i) => ({
    question: i.question,
    answer: i.answer,
    handler: ()=>props.actionProvider.handleAnswers(i.answer),
  }));
  const optionsMarkup = options.map((option, index) => (
    <button
      className="option-button"
      key={index}
      onClick={option.handler}
    >
      {option.question}
    </button>
  ));
  return <div className="options-container">{optionsMarkup}</div>;
};

export default AppointmentOption;
