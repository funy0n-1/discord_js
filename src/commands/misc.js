//the commands object contains all the commands for this file
//each commands is broken up into two parts: the commands alias and the function to be ran
//the command handler will be looking for aliases 

var commands = {

    one: {alias: ["misc_test"], 
    func: 
    function (arg) {
        console.log('misc_test1')
        
    }},


    two: {alias: ["misc_test2"],
    func:
    function (arg) {
        console.log('misc_test2')
    
    }}
}

module.exports=
function cog(){
    return commands
}