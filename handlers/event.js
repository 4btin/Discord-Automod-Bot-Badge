const { readdirSync } = require('fs');

module.exports = (abtin) => {
    readdirSync('./events/').forEach(dir => {
        const events = readdirSync(`./events/${dir}`).filter(file => file.endsWith('.js'));
        for(let file of events) {
            let pull = require(`../events/${dir}/${file}`);
            if(pull.name) {
                abtin.events.set(pull.name, pull);
            } else {
                continue;
            }
        }
    });
}
