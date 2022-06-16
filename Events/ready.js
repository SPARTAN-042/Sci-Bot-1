const Event = require('../structures/Event.js');

const config = require('../config.json');

module.exports = new Event('ready', client => {
	client.user.setActivity('a game', { type: 'PLAYING' }),
	console.log(`\n~Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);

	const init = async () => {
		const guild = client.guilds.cache.get('901158124390604821');
		const totalOnline = await guild.members.cache.filter(member => member.presence?.status === 'online');
		console.log(`There are currently ${totalOnline.size} members online in this guild!`);
	};

	init();
});