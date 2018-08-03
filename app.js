const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const config = require('./config/config');

//Commands Setup
bot.registry.registerGroup('notetoself', 'NoteToSelf');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

//Login To The Server
bot.login(config.discord.BOT_TOKEN);

bot.on('ready', function() {
  console.log('Bot is now ready!');
});
