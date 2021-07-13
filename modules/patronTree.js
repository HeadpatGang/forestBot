const Discord = require ('discord.js')

module.exports = client => {
    const channelID = ['839447015901102080']
    let hoursLink = 'https://hours.zone/invite/16A9-eURt'
    client.on('message', message => {
        if(message.author.bot) return;
        if(message.channel.id === channelID[0]) {
        message.guild.channels.cache.get(channelID[0]).send('Please tell me your current tree')
        const treeType = []
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 5000});
        console.log(collector)
        collector.on('collect', message => {
            if(message.author.bot) return;
            message.guild.channels.cache.get(channelID[0]).send(`Your current tree is set to ${message.content}`)
        })
        }
    })
}