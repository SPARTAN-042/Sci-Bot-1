const Event = require('../structures/Event.js');

// const config = require('../config.json');

module.exports = new Event('ready', client => {
	client.user.setActivity('you', { type: 'Watching' }),
	console.log(`\n~Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);

	const init = async () => {
		const guild = client.guilds.cache.get(process.env.GUILD_ID);
		const totalOnline = await guild.members.cache.filter(member => member.presence?.status === 'online');
		console.log(`There are currently ${totalOnline.size} members online in this guild!`);
	};

	init();
});