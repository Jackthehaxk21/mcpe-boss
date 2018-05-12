module.exports.run = function(client, message){
  const handler = require('../Commands/handler.js')
  handler.run(client, message)
}