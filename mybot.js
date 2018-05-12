const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs')
require('./web.js').run()

const readyEvent = require('./Data/Functions/ready.js')
const messageEvent = require('./Data/Functions/message.js')
const guildCreateEvent = require('./Data/Functions/guildCreate.js')
const guildDestroyEvent = require('./Data/Functions/guildDestroy.js')

client.prefix ='.'
//Sets the prefix for bot to run a command on.

process.on('unhandledRejection', error => {
    console.log('Uncaught Promise Error: ', error.stack);
});


client.on("ready", () => {
  readyEvent.run(client)
})

client.on("message", (message) => {
  messageEvent.run(client, message)
})

client.on("guildCreate", (guild) => {
  guildCreateEvent.run(client, guild)
})
client.on("guildDestroy", (guild) => {
  guildDestroyEvent.run(client, guild)
})

client.login(process.env.SECRET)