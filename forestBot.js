const Discord = require('discord.js')
const { prefix } = require('./config.json')
const channelID = ['824051230736515102', '824051131549483018']

module.exports = client => {
    client.on('message', message => { 
        if(message.author.bot) return;
        if(!message.content.startsWith(prefix)) return;
        const forestInfoEmbed = new Discord.MessageEmbed()
            .setColor('#8B4513')
            .setTitle('Forest Tree Information')
            .setAuthor('Planting Cool Tree', 'https://i.imgur.com/EzVOjhn.png')
            .addFields(
                { name: 'Tree Name', value: 'A Cool Tree', inline: true},
                { name: '\u200B', value: '\u200B', inline: true},
                { name: 'Starting at', value: 'XX:45', inline: true},
                { name: 'Code', value: '6pyeb4k', inline: true},
                { name: '\u200B', value: '\u200B', inline: true},
                { name: 'Forest Link', value: '[Link](https://www.forestapp.cc/join-room?token=6pyeb4k)', inline: true},
            )
            .setTimestamp()
            client.channels.cache.get(channelID[1]).send(forestInfoEmbed)
    })
}