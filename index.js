require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const cron = require('node-cron');
console.log('Booting up...');
const client = new Client({
    authStrategy: new LocalAuth(),
});

// client.on('qr', (qr) => {
//     qrcode.generate(qr, { small: true });
//     console.log('Scan the QR code above with your WhatsApp Linked Devices.');
// });

// client.on('ready', () => {
//     console.log('✅ Bot is connected and ready to send messages!');

//     const groupId = process.env.TARGET_GROUP_ID; 
//     const message = 'Mengingatkan!';

//     // This will fire instantly as soon as the bot logs in
//     client.sendMessage(groupId, message).then(() => {
//         console.log('Test message sent successfully!');
//     }).catch((err) => {
//         console.error('Failed to send message:', err);
//     });

//     // You can leave your cron.schedule block down here for later
// });

client.on('ready', () => {
    console.log('✅ Bot is connected and ready to send messages!');

    // Define the group ID once so both schedules can use it
    const groupId = process.env.TARGET_GROUP_ID;

    // 1. MORNING SCHEDULE (09:00 AM)
    cron.schedule('30 8 * * *', () => {
        const message = `Selamat pagi rekan rekan, jangan lupa untuk melakukan absensi masuk melalui aplikasi pada pagi hari ini, terima kasih!`;
        
        client.sendMessage(groupId, message).then(() => {
            console.log('Morning reminder sent successfully!');
        }).catch((err) => {
            console.error('Failed to send morning message:', err);
        });
    }, {
        scheduled: true,
        timezone: "Asia/Jakarta"
    });

    // 2. EVENING SCHEDULE (06:00 PM / 18:00)
    cron.schedule('0 18 * * *', () => {
        // You can customize this evening message however you like
        const message = `Selamat sore rekan rekan, jangan lupa untuk melakukan absensi pulang melalui aplikasi pada sore hari ini, terima kasih!`;
        
        client.sendMessage(groupId, message).then(() => {
            console.log('Evening reminder sent successfully!');
        }).catch((err) => {
            console.error('Failed to send evening message:', err);
        });
    }, {
        scheduled: true,
        timezone: "Asia/Jakarta"
    });
});

// HELPER: Type !getid in your WhatsApp group to find its ID
/*
client.on('message_create', async msg => {
    if (msg.body === '!getid') {
        const groupId = msg.fromMe ? msg.to : msg.from;
        console.log(`Found ID: ${groupId}`);
        msg.reply(`The ID for this chat is: ${groupId}`);
    }
});
*/
client.initialize();