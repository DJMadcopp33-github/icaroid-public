const mongo = require('../../mongo')
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['announce'],
    expectedArgs: '<announcment>',
    permissionError: '',
    minArgs: 1,
    maxArgs: null,
    callback: async (message, arguments, text, client)  => {
        const embed = new MessageEmbed().setColor('#900CC7')
        .setAuthor(`Requested by ${message.author.username}!`, message.author.displayAvatarURL())
        .setDescription(text)
        .setFooter('?announce')
        .setTimestamp()

        message.channel.send('@everyone')
        message.channel.send(embed)
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
}