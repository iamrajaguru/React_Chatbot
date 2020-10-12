class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes(message.toLowerCase())) {
      this.actionProvider.updateAppointment(lowerCaseMessage);
    }
  }
}

export default MessageParser;
