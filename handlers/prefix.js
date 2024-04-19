const { readdirSync } = require('fs');

module.exports = (abtin) => {
	readdirSync('./command/').forEach(dir => {
		const commands = readdirSync(`./command/${dir}`).filter(file => file.endsWith('.js'));
		for (let file of commands) {
			let pull = require(`../command/${dir}/${file}`);
			if (pull.name) {
				abtin.commands.set(pull.name, pull);
			} else {
				continue;
			} if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => abtin.aliases.set(alias, pull.name))
		}
	});
};