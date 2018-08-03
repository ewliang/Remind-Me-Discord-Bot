const commando = require('discord.js-commando');

class ReminderCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'remindme',
      group: 'notetoself',
      memberName: 'remindme',
      description: 'Allows you to set a reminder for yourself.'
    });
  }

  async run(message, args) {
    let splitMessage = args.split(' ');
    message.reply('YOU JUST SAID: ' + args);
  }
}

module.exports = ReminderCommand;
