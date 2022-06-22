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
                console.log(`Response: ${response}`);

                
				const getCharacter = `${url}${randChar}`;
                const getName = getCharacter;

                const getQuote = '';

                const image = getCharacter; // test

				const text = '';
				const imageembed = new Discord.MessageEmbed()
					.setTitle('Waltar') // name
                    .setImage('https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg')
					.setColor('#2c5717')
					.setDescription(`['test']('test')\n\n${text}`); // quote
                message.channel.send({ embeds: [imageembed] });
			}).on('error', function(e) {
				console.log('Got an error: ', e);
			});

		});

	},

});