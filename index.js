/* eslint-disable no-shadow */
const {
	REST,
} = require('@discordjs/rest');
const {
	Routes,
} = require('discord-api-types/v9');

const Client = require('./structures/Client.js');
const Command = require('./structures/Command.js');

const config = require('./config.json');

const client = new Client();

client.start(config.token);

// const bruh = function() {
// 	return client.api.applications(config.clientId).commands.get();
// };

// const pain = bruh();
// console.log(pain);

// pain.then(function(result) {
// 	console.log(result);
// });

// client.api.applications(config.clientId).commands('902555284281634816').delete();