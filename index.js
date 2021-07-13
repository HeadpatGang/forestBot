const Discord = require('discord.js')
const { 
    deleteDumbMessages,
    forestBot,
    neverGiveUp,
    anthonysFunction,
    patronTree,
    databaseConnection,
    databaseTest
} = require('./modules');

const client = new Discord.Client();
require('dotenv').config()
const discordAuthToken = process.env.discordAuthToken;

client.on('ready', () => {
    console.log(`Client has logged in on ${client.guilds.cache.size} guilds`)
    console.log()
    client.user.setPresence({
        status: 'online',
        activity: {
            name: 'Relaxing Breath of the Wild music with rain',
            type: 'LISTENING',
            url: 'https://www.youtube.com/watch?v=hjQfYEjvJeU'
        }
    })
    //deleteDumbMessages(client)
    //forestBot(client)
    //neverGiveUp(client)
    //anthonysFunction(client)
    //patronTree(client)
    databaseConnection(client)
    databaseTest(client)
})

client.login(discordAuthToken)


