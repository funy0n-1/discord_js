//the commands object contains all the commands for this file
//each commands is broken up into two parts: the commands alias and the function to be ran
//the command handler will be looking for aliases 

var commands = {

    kick: {alias: ["kick"], 
    func: 
    function (bot, message, arg) {
        message.channel.send(`kicked ${arg[0]}... jk`);
        
    }},


    mod_two: {alias: ["mod_test2"],
    func:
    function (bot, message, arg) {
        message.channel.send('mod_test2')
    
    }}
}

module.exports=
function cog(){
    return commands
}