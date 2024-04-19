const ms = require("ms");
const chalk = require('chalk');
const abtin = require("../../index.js");
const settings = require("../../settings.json");

abtin.once('ready', async () => {

  console.log(chalk.blue(chalk.bold(`User name`)), (chalk.white(`>>`)), (chalk.green(` ${abtin.user.username}`)))
  console.log(chalk.blue(chalk.bold(`Servers`)), (chalk.white(`>>`)), (chalk.green(`${abtin.guilds.cache.size}`)))
  console.log(chalk.blue(chalk.bold(`Users`)), (chalk.white(`>>`)), (chalk.green(`${abtin.users.cache.size}`)))
  console.log(chalk.blue(chalk.bold(`Prefix`)), (chalk.white(`>>`)), (chalk.green(`${settings.prefix}`)))
  console.log(chalk.blue(chalk.bold(`Situation`)), (chalk.white(`>>`)), (chalk.green(`Bot Online!`)))

  abtin.user.setActivity(`${settings.prefix}automod`)
});
