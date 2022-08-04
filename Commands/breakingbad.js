/* eslint-disable no-inline-comments */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
const Command = require('../structures/Command.js');
import discord from 'discord.js';
import fetch from 'node-fetch';
import https from 'https';
const baseUrl = 'https://www.breakingbadapi.com/api/';
const charUrl = 'https://www.breakingbadapi.com/api/character/random';
const quoteUrl = 'https://www.breakingbadapi.com/api/quote/random?author=';

const randChar = 'character/random';
const randQuote = 'quote/random?author=';


module.exports = new Command({
	name: 'bb',
	description: 'Breaking bad funny',

	async run(message, args, client) {

		// https.get(url, (result) => {
		// 	let body = '';
		// 	result.on('data', (chunk) => {
		// 		body += chunk;
		// 	});

		// 	result.on('end', () => {
        //         const response = JSON.parse(body);

		// 		const randCharQuote = response[0].quote;
		// 		console.log(randCharQuote); //
		// 		const randCharImg = response[0].img;
		// 		const randCharName = response[0].name;
                
		// 		const getCharacter = `${url}${randChar}`;
        //         const getQuote = `${url}${randQuote}${randCharQuote}`; // quote/random?author=
		// 		const imageembed = new Discord.MessageEmbed()
		// 			.setTitle(`${getCharacter}${randCharName}`) // name
        //             .setImage(`${randCharImg}`) // image
		// 			.setColor('#2c5717')
		// 			.setDescription(`${getQuote}`); // quote
        //         message.channel.send({ embeds: [imageembed] });
		// 	}).on('error', function(e) {
		// 		console.log('Got an error: ', e);
		// 	});

		// });
		
		fetch('https://google.com')
			.then(res => res.text())
			.then(text => console.log(text));
	},

});