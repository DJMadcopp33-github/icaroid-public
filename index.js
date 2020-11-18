const loadCommand = require('./commands/load-commands')
const Discord = require('discord.js');
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }}});

const config = require('./config.json');
const command = require('./command');
const mongoose = require('mongoose');
const commandBase = require('./commands/command-base');

mongoose.connect('mongodb+srv://Madcop:BuckyMaxMax112@discordjs.cplrv.azure.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true})

client.on('ready', async () => {
    client.setMaxListeners(1000)
    console.log('The bot is online!')
    client.user.setActivity(`${client.guilds.cache.size} servers!`, { type: "WATCHING" })

    commandBase.loadPrefixes(client)
    loadCommand(client)
})

client.login(config.token)