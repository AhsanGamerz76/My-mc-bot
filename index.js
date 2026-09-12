const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'subdomain.mcsh.io', 
        port: 25565,                  
        username: 'AFK_Bot_247',
    });

    bot.on('spawn', () => {
        console.log('Bot successfully joined the server!');
        
        // Wait 3 seconds after spawning, then handle the security commands
        setTimeout(() => {
            // This runs the register command for its first visit
            bot.chat('/register AhsanGamer AhsanGamer'); 
            
            // This runs the login command for all future visits
            bot.chat('/login AhsanGamer'); 
            
            console.log('Sent registration and login security commands.');
        }, 3000);
    });

    bot.on('end', () => {
        console.log('Bot disconnected! Reconnecting in 10 seconds...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log(err));
}

createBot();
