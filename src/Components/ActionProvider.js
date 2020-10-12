import axios from "axios";
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

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
    try {
      const response = await axios.post(
        "https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment",
        { type: "Search", value: message }
      );
      const messages = this.createChatBotMessage("Appointment ?", {
        widget: "appointment",
      });
      this.setState((state) => ({
        ...state,
        list: response.data.responseMessage,
      }));
      this.updateChatbotState(messages);
    } catch (err) {
      console.log(err);
    }
  }
}

export default ActionProvider;
