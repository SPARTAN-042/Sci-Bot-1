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
                
				const getCharacter = `${url}${randChar}`;
                const getName = getCharacter;

                const getQuote = '';

                const image = getCharacter; // test

				const text = 'Jesse, we need to cook';
				const imageembed = new Discord.MessageEmbed()
					.setTitle('Waltar') // name
                    .setImage() // image
					.setColor('#2c5717')
					.setDescription(`${text}`); // quote
                message.channel.send({ embeds: [imageembed] });
			}).on('error', function(e) {
				console.log('Got an error: ', e);
			});

		});

	},

});