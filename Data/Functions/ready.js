module.exports.run = function(client){
  client.user.setPresence({game: {name: "Minecraft in "+client.guilds.size+" servers." , type: 1}})
  console.log("Okay, i am ready to kick ass!");
  //Message given when bot has no errors and is ready to use.
}