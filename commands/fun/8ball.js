const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['8ball'],
    expectedArgs: '<Question>',
    permissionError: '',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        var RandomOneOf = ([
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
        let gameval = Math.floor((Math.random() * RandomOneOf.length));
        const embedLoading = new MessageEmbed()
            .setColor('#900CC7')
            .setAuthor(`8ball for ${message.author.username}`, message.author.displayAvatarURL())
            .setDescription('Thinking of an answer...')
            .setTimestamp()
        const embedAnswer = new MessageEmbed()
            .setColor('#900CC7')
            .setAuthor(`8ball for ${message.author.username}`, message.author.displayAvatarURL())
            .setDescription(RandomOneOf[gameval])
            .setFooter('Answer')
            .setTimestamp()

        message.channel.send(embedLoading).then((resultMessage) => {
            setTimeout(function() {
                resultMesssage.edit(embedAnswer)
              }, 5000)  
        });
    },
    permissions: '',
    requiredRoles: [],
};