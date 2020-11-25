const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['8ball'],
    expectedArgs: '<Question>',
    permissionError: '',
    minArgs: 01,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        var ball = ([
            'It is certain',
            'Without a doubt',
            'Most likely',
            'Yes',
            'Reply hazy try again',
            'Ask again later',
            'My reply is no',
            'No',
            'Very doubtful',
            ]);
        let gameval = Math.floor((Math.random() * ball.length));
        const embedLoading = new MessageEmbed()
            .setColor('#900CC7')
            .setAuthor(`8ball for ${message.author.username}`, message.author.displayAvatarURL())
            .setDescription('Thinking of an answer...')
            .setTimestamp()
        const embedAnswer = new MessageEmbed()
            .setColor('#900CC7')
            .setAuthor(`8ball for ${message.author.username}`, message.author.displayAvatarURL())
            .setDescription(ball[gameval])
            .setFooter('Answer')
            .setTimestamp()

            message.channel.send(embedAnswer)
    },
    permissions: '',
    requiredRoles: [],
};