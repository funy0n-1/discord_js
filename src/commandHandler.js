const { Message } = require('discord.js');
const misc_commands = require('./commands/misc.js')
const mod_commands = require('./commands/mod.js')

var command_files = [misc_commands, mod_commands]

var all_commands = new Object();

command_files.forEach(function(value){
    all_commands = Object.assign(all_commands, value());
  });

console.log(all_commands);


module.exports =
async function commandHandler(bot, msg) {
    const prefix = bot.prefix;
    const [cmdName, ...args] = msg.content
    .trim()
    .substring(prefix.length)
    .split(/\s+/);
    let command_exists = true;
    for (const property in all_commands) {
      if (all_commands[property]['alias'].includes(cmdName)){
        all_commands[property]['func'](bot, msg, args);
        return
      }
      else{
        command_exists = false;
      }
    }
    if (command_exists === false){
      msg.channel.send('that command doesn\'t exist')
    }
}