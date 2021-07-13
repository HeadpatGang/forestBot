const trustedFriends = ['395230473393012738', '226997505534066688']
let currentID = 0;
let stampOfDeletion = '796831666702123019'

module.exports = client => {
    client.on('messageReactionAdd', (reaction, user) => {
        for (currentID = 0; currentID < trustedFriends.length; currentID++) {
            if (reaction.emoji.id === stampOfDeletion && user.id === trustedFriends[currentID]) {
                reaction.message.delete();
            }
        }
    })
}