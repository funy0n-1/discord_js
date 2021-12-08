const misc_commands = require('./commands/misc.js')
const mod_commands = require('./commands/mod.js')

var command_files = [misc_commands, mod_commands]

var all_commands = new Object();

command_files.forEach(function(value){
    all_commands = Object.assign(all_commands, value());
  });

console.log(all_commands);


module.exports =
async function commandHandler(prefix, msg) {
    const [cmdName, ...args] = msg.content
    .trim()
    .substring(prefix.length)
    .split(/\s+/);
    console.log(cmdName);
    console.log(args);
}