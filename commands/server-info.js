const { MessageEmbed } = require('discord.js')
const moment = require('moment')

module.exports = {
    commands: ['serverinfo', 'serverinformation'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text, client) => {
        const { guild, channel } = message
        const user = message.member.user
        const member = guild.members.cache.get(user.id)
        let tiers = {
            0: "None",
            1: "Tier 1",
            2: "Tier 2",
            3: "Tier 3"
        }

        let e = new MessageEmbed()
        .setColor(message.guild ? message.member.displayColor : message.guild.color)
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setTimestamp()
        .setThumbnail(message.guild.iconURL())
        .setFooter(`On Shard: ${message.guild.shardID}`, client.user.displayAvatarURL())
        .setTitle(`Server Information`)
        .setDescription(`
        **Name: **${message.guild.name}
        **ID: **${message.guild.id}
        **Icon: **${message.guild.iconURL() ? `[URL](${message.guild.iconURL()})` : "None"}
        **Owner: **${message.guild.owner} (${message.guild.ownerID})
        **Verification Level: **${member.guild.verificationLevel}
        **Region: **${member.guild.region}${message.guild.features.length !== 0 ? `\n**Features: ** ${message.guild.features.map(feature => `\`${feature}\``).join(', ')}` : ""}
        **Members: **${message.guild.memberCount} 
        
        **Created At**
        - ${moment(message.guild.createdAt)}
        `)
        return message.channel.send(e)
        
    },
    permissions: '',
    requiredRoles: [],
}