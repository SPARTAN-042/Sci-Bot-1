const Event = require('../structures/Event.js');

module.exports = new Event('messageCreate', (client, message) => {
	if (!message.content.startsWith(client.prefix) || message.author.bot) return;

	console.log(`<${message.author.tag}> ${message.content}`);

	const args = message.content.slice(client.prefix.length).trim().split(/ +/);
	global.args = args;

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	command.run(message, args, client);
});