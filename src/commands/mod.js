//the commands object contains all the commands for this file
//each commands is broken up into two parts: the commands alias and the function to be ran
//the command handler will be looking for aliases 

var commands = {

    mod_one: {alias: ["mod_test1"], 
    func: 
    function (arg) {
        console.log('mod_test1')
        
    }},


    mod_two: {alias: ["mode_test2"],
    func:
    function (arg) {
        console.log('mod_test2')
    
    }}
}

module.exports=
function cog(){
    return commands
}