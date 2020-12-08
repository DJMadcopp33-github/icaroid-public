const loadCommands = require('./load-commands')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['help', 'h'],
  description: "Describes all of this bot's commands",
  callback: (message, arguments, text) => {
    const helpEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`Icaroid's command list.`)
      .addField(':game_die:General', '`?help general`', true)
      .addField(':moneybag:Economy', '`?help economy`', true)
      .addField(':gear:Settings', '`?help settings`', true)
      .addField(':joy:Fun', '`?help fun`', true)
      .addField(':smirk:NSFW', '`?help nsfw`', true)
      .addField(':tools:Moderation', '`?help moderation`', true)
      .setFooter(`Requested by ${message.author.username}`)
    const funEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Fun Commands!')
      .setDescription('`?8ball`,\n`?quiz`,\n`?howgay`,\n`?meme`,\n`?serverinfo`.')
      .setFooter(`Requested by ${message.author.username}`)
    const moderationEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Moderation Commands!')
      .setDescription('`?kick`,\n`?ban`,\n`?warn`,\n`?listwarns`.')
      .setFooter(`Requested by ${message.author.username}\nModeration commands not finished some may not work.`)
    const nsfwEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('NSFW Commands!')
      .setDescription('`?pgif`,\n`?ass`,\n`?hentai`,\n`?anal`.')
      .setFooter(`Requested by ${message.author.username}\nNSFW Channel only!`)
    const economyEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Economy Commands!')
      .setDescription('`?bal`,\n`?work`,\n`?crime`,\n`?beg`,\n`?store`,\n`?buy`,\n`?inventory`,\n`?rob`.')
      .setFooter(`Requested by ${message.author.username}`)
    const generalEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('General Commands!')
      .setDescription('`?add`,\n`?subtract`,\n`?botinfo`,\n`?userinfo`,\n`?serverinfo`,\n`?help`,\n`?ping`.')
      .setFooter(`Requested by ${message.author.username}`)
      
    console.log(text)
    if(text.toLowerCase() === 'economy'){
      message.channel.send(economyEmbed)
    } else if(text.toLowerCase() ===  'general'){
      message.channel.send(generalEmbed)
    } else if(text.toLowerCase() === 'fun'){
      message.channel.send(funEmbed)
    } else if(text.toLowerCase() === 'moderation'){
      message.channel.send(moderationEmbed)
    } else if(text.toLowerCase() === 'nsfw'){
      if(message.channel.nsfw === true){
        message.channel.send(nsfwEmbed)
      } else {
        message.reply(`This channel is not NSFW, you can only use this in NSFW channels`)
      }
    } else {
      message.channel.send(helpEmbed)
    }
  },
}