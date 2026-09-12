const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'subdomain.mcsh.io', 
        port: 25565,                  
        username: 'AFK_Bot_247',
        // This stops the network protocol from crashing if the host firewall hides the version
        version: false, 
        checkTimeoutInterval: 60000 // Gives the server 60 seconds to respond to network lag
    });

    bot.on('spawn', () => {
        console.log('Bot successfully bypassed firewall and joined the server!');
        
        setTimeout(() => {
            bot.chat('/register AhsanGamer AhsanGamer'); 
            bot.chat('/login AhsanGamer'); 
            console.log('Sent security credentials.');
        }, 4000);
    });

    bot.on('end', (reason) => {
        console.log(`Bot disconnected due to: ${reason}. Reconnecting in 10 seconds...`);
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log('Network Error caught safely:', err.message));
}

createBot();
