import axios from "axios";
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleAnswers(answer) {
    const message = this.createChatBotMessage(answer);
    this.updateChatbotState(message);
  }
  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  async updateAppointment(message) {
    const messages = this.createChatBotMessage("Appointment ?", {
      widget: "appointment",
    });
    const response = await axios.post(
      "https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment",
      { type: "Search", value: "appointment" }
    );
    console.log(response.data.responseMessage);
    this.setState((state) => ({
      ...state,
      list: response.data.responseMessage,
    }));
    this.updateChatbotState(messages);
  }
}

export default ActionProvider;
