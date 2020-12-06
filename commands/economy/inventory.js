const economy = require('../../economy')
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['inventory', 'inv'],
    expectedArgs: '[Target users @]',
    permissionError: '',
    minArgs: 0,
    maxArgs: 1,
    callback: async (message, arguments, text, client) => {
        const guildId = message.guild.id
        const userId = message.author.id
        const target = message.mentions.users.first() || message.author
        const targetId = target.id

        let items = await db.fetch(message.author.id);
        if(items === null) items = "Nothing"

        const invEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`${target.username}'s inventory`, target.displayAvatarURL())
            .addField('Inventory', items)
            .setFooter('Get more items!')
            .setTimestamp()

        message.channel.send(invEmbed)
    },
    permissions: '',
    requiredRoles: [],
}