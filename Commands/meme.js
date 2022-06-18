const Command = require('../structures/Command.js');
const Discord = require('discord.js');
const https = require('https');
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100';


module.exports = new Command({
	name: 'meme',
	description: 'Generate a meme!',

	async run(message, args, client) {

		https.get(url, (result) => {
			let body = '';
			result.on('data', (chunk) => {
				body += chunk;
			});

			result.on('end', () => {
				const response = JSON.parse(body);
				const index = response.data.children[Math.floor(Math.random() * 99) + 1].data;

				if (index.post_hint !== 'image') {

					const text = index.selftext;
					const textembed = new Discord.MessageEmbed()
						.setTitle(subRedditName)
						.setColor(9384170)
						.setDescription(`[${title}](${link})\n\n${text}`)
						.setURL(`https://reddit.com/${subRedditName}`);

					message.channel.send(textembed);
				}

				const image = index.preview.images[0].source.url.replace('&amp;', '&');
				const title = index.title;
				const link = 'https://reddit.com' + index.permalink;
				const subRedditName = index.subreddit_name_prefixed;

				if (index.post_hint !== 'image') {
					const text = index.selftext;
					const textembed = new Discord.RichEmbed()
						.setTitle(subRedditName)
						.setColor(9384170)
						.setDescription(`[${title}](${link})\n\n${text}`)
						.setURL(`https://reddit.com/${subRedditName}`);

					message.channel.send(textembed);
				}
				console.log(image);
				const imageembed = new Discord.MessageEmbed()
					.setTitle(subRedditName)
					.setImage(image)
					.setColor(9384170)
					.setDescription(`[${title}](${link})`)
					.setURL(`https://reddit.com/${subRedditName}`);
				message.channel.send(imageembed);
			}).on('error', function(e) {
				console.log('Got an error: ', e);
			});
		});
	},
});
