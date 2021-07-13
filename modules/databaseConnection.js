module.exports = client => {
var mysql = require('mysql');
var config = require('../config.json')
var connection = mysql.createConnection(config.mysql)

connection.connect();
console.log('Connection established')
connection.query(`UPDATE Leech SET lootFromLure='are both cuties - Sent from Discord' WHERE playerName='Aya'`)
connection.end();
}
