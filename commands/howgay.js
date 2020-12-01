const { MessageEmbed, MessageFlags } = require('discord.js')

module.exports = {
    commands: ['howgay'],
    expectedArgs: '[Target]',
    permissionError: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text, client) => {
        const target = message.mentions.users.first() || message.author
        const targetId = target.id

        const randomNumber = Math.floor(Math.random() * 100)
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`How gay is ${target.username}?`, target.displayAvatarURL())
            .setDescription(`${target} is ${randomNumber}% gay!`)
            .setFooter('This is a joke! Or is it?')
            .setTimestamp()
        
        message.channel.send(embed)
    },
    permissions: '',
    requiredRoles: [],
}