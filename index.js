const { Client, Collection, MessageEmbed } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("fs");
const settings = require("./settings.json");
const express = require('express');
const chalk = require('chalk');
const abtin = new Client({
    intents: 32767
});

abtin.commands = new Collection();
abtin.slash_commands = new Collection();
abtin.aliases = new Collection();
abtin.events = new Collection();
abtin.categories = fs.readdirSync("./command");
module.exports = abtin;
if(!abtin) return
["prefix", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(abtin);
});
process.on('unhandledRejection', err => {
    console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
    console.log(err);
});
const AUTH = process.env.TOKEN || settings.abtin.TOKEN;
if (!AUTH) {
    console.warn("[WARN] Please make sure your token is correct!").then(async () => process.exit(1));
} else {
    abtin.login(AUTH).catch(() => console.log("[WARN] The token appears to be invalid, please check again. If this error is still showing, enable 3 Intent."));
}

console.clear();
console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), (chalk.green(`Starting Up`)))
console.log(`\u001b[0m`)
console.log(chalk.blue(chalk.bold(`©4btin Streaming Bot`)), (chalk.white(`|`)), (chalk.green(`2005 - ${new Date().getFullYear()}`)), (chalk.white(`|`)), (chalk.red(`All Rights Reserved`)))
console.log(`\u001b[0m`)