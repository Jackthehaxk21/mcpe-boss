module.exports.run = async function(client, message) {
  let prefix = client.prefix
  const prefixMention = new RegExp(`^<@!?${client.user.id}>`);
  prefix = prefixMention.test(message.content) ? message.content.match(prefixMention)[0] + " " : prefix;
  if(!message.content.toLowerCase().startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(message.channel.type == 'dm') return message.channel.send('I only work in servers.')
  try {
    const command2 = require('./'+command+'.js')
    await command2.run(client, args, message);
    console.log(`Command `+command+` was used by `+message.author.username+' - '+message.content);
  } catch (err) {}
  return;
}