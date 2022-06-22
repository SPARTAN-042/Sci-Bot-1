/* eslint-disable no-inline-comments */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
const Command = require('../structures/Command.js');
const Discord = require('discord.js');
const https = require('https');
const url = 'https://www.breakingbadapi.com/api/';
const randChar = 'character/random';
const randQuote = 'random?author=';


module.exports = new Command({
	name: 'breaking-bad',
	description: 'Breaking bad funny',

	async run(message, args, client) {

		https.get(url, (result) => {
			let body = '';
			result.on('data', (chunk) => {
				body += chunk;
			});

			result.on('end', () => {
                const response = JSON.parse(body);

				const getCharacter = '';
                const getName = getCharacter;

                const getQuote = '';


				const text = '';
				const textembed = new Discord.MessageEmbed()
					.setTitle() // name
					.setColor('#2c5717')
					.setDescription(`['test']]('test')\n\n${text}`) // quote
					.setURL(`${url}`); // character image

				message.channel.send({
					embeds: [textembed],
				});
			}).on('error', function(e) {
				console.log('Got an error: ', e);
			});

		});

	},

});