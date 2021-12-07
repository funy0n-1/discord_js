const misc_commands = require('./commands/misc.js')
const mod_commands = require('./commands/mod.js')

var all_commands = [misc_commands, mod_commands]

all_commands.forEach(function(value){
    let commands = [];
    commands.push(value());
    console.log(commands);
  });

module.exports =
async function commandHandler(prefix, msg) {
    const [cmdName, ...args] = msg.content
    .trim()
    .substring(prefix.length)
    .split(/\s+/);
    console.log(cmdName);
    console.log(args);
    console.log(misc_commands())
}