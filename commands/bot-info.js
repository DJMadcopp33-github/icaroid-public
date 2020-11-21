const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['botinfo', 'botinformation', 'info'],
    expectedArgs: '[bot-information]',
    permissionError: '',
    minArgs: 0,
    maxArgs: null,
    callback: (message) => {
        message.channel.send('Coming soon!')
    },
    permissions: '',
    requiredRoles: [],
}