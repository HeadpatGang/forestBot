module.exports = client => {
    client.on('message', message => {
        if(message.author.bot || message.author.id === '226997505534066688') return; 
        const guild = message.guild
        const member = guild.members.cache.find((member) => member.id === message.author.id)
        let studyModeOn = false;
        let studyRole = '839587125849489408'
        let breakModeOn = false;
        let breakRole = '839587152496033853'
        let studyStudy = (message.content.slice(7))
        let studySession = (message.content.slice(7)) * 5000;
        let breakSession = 10000;
        if(message.content.includes('study')) { // So everything below this will be a function or two, based on the value of studySession, it'll replay the function that many times.
            for(i = 0; i < studyStudy; i++) {
                studyMode()
            }  
        }
        function studyMode() {
            if(message.author.bot) return;
            member.roles.add(studyRole)
                message.reply(`Your study session is ${studySession / 1000} seconds long`)
                console.log(`Adding Study role for ${studySession / 1000} seconds on user ${message.author.tag}`)
                setTimeout(function() {
                    member.roles.remove(studyRole)
                    member.roles.add(breakRole)
                    breakModeOn = true;
                    if (breakModeOn) {   
                        console.log(`Break session is ${breakSession / 1000} seconds long`)
                        message.reply(`Break session is ${breakSession / 1000} seconds long`)
                        setTimeout(function() {
                            console.log(`Break is now over`)
                            message.reply('Break is now over')
                            member.roles.remove(breakRole)
                        }, breakSession);
                    }
                }, studySession);
        }
    })
}

/*                                                        _______________________________________
Project Work                                             |                Sessions               |
= Formulas =                                             |   1       2       3       4       5   |
breaksNeeded = (sessionInput - 1) probably? 5 sessions = |(60,10),(60,10),(60,10),(60,10),(60,10)| Breaks needed would be only 4, since the last isn't needed. 
session = 60                                             |_______________________________________|
break = 10

== Concept == 
Discord "focus" role and "break" role idea

Make a bot that gives a focus role, the got will give you this role for the 60 minute focus time, 
during this time you won't be able to speak in any of the text channels in the server (giving more insentive to be focused)

when the 60 minutes are up, you will automatically get reasigned to the role of "break" which will move you into a break room channel and the cycle will last for 10 minutes

once the 10 minutes are up, the process will repeat, number of sessions could be set with a command

=== TO DO ===
1) Create "Study" and "Break" roles
2) Remove ability to use text / voice on Study, 
3) Ability for bot to grant roles 
4) Implement a timer for the bot whenever the bot grants the "Study" role
5) Automatically remove "Study" role whenever timer is expired whilst add "Break" role
6) Make the message a modular of 60, so it shows the Hours/Minutes/Seconds for a session
7) Make everything a function that can be invoked multiple times based on the value of studySession
6) Scale 6 upwards based on how many sessions are needed (Go to = Formulas = for more info)
7) Repeat 4 through 6 based on how many sessions are needed.
8) Move to break room whenever in break mode (Not confirmed)(Maybe just use chill room?)

==== DONE ====
*/