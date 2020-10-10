class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("appointment")) {
      this.actionProvider.updateAppointment();
    }
  }
}

export default MessageParser;
