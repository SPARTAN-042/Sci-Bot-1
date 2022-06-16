const Command = require('../structures/Command.js');

const Discord = require('discord.js');

module.exports = new Command({
	name: 'embed',
	description: 'Shows an embed',
	async run(message, args, client) {

		const embed = new Discord.MessageEmbed();

		embed.setTitle('This is a test embed')
			.setAuthor(message.author.username, message.author.avatarURL({
				dynamic: true,
			}), '');

		message.reply({
			embeds: [embed],
		});

	},
});