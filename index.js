const Discord = require ('discord.js');
require('dotenv').config();
const forestBot = require('./forestBot')
const discordAuthTokenFB = process.env.discordAuthTokenFB;
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Client is ready')
    forestBot(client)
})

client.login(discordAuthTokenFB)