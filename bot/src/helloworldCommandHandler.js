const fetch = require('node-fetch');
const helloWorldCard = require("./adaptiveCards/helloworldCommand.json");
const { MessageBuilder } = require("@microsoft/teamsfx");
const { Body } = require('node-fetch');

class HelloWorldCommandHandler {
  triggerPatterns = "";

  async handleCommandReceived(context, message) {
    // verify the command arguments which are received from the client if needed.
    console.log(`Bot received message: ${message.text}`);

    const response = await fetch(
	// https://github.com/Remheob/prototype_dashboard
      'Paste the URL to your instance of the dashboard here. (See link above)', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            user_id: context._activity.from.id,
            user_name: context._activity.from.name,
            message_id: context._activity.id,
            message: message.text,
            conversation_id: context._activity.conversation.id
          }
          )
      }
      );
    const data = await response;
    console.log(data);
}

module.exports = {
  HelloWorldCommandHandler,
};
