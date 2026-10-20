Reminder Bot Whatsapp

simple bot program that send message to a designated chat

first initialization:
step 1
this bot run with node.js so you need node.js installed, then you need a whatsapp web package so you need to install those package by typing the following cmd prompt into the local project folder:
npm init -y
npm install-scripts approve puppeteer
npm install whatsapp-web.js qrcode-terminal node-cron

step 2
the bot send message into a chat based on it's chat id, you can get this id by utilizing the sets of line at the bottom of bot script that is being ignored
turn the script back on and boot the bot, then type "!getid" into specific chat you want to target, the bot will soon pull the chat id by typing it out loud into the chat
once done, create .env file and input the chat id like this:
//start of script injection
TARGET_GROUP_ID=[your chat id]
//end of script injection
you may turn off the !getid script again after you finished

step 3
as of latest change, the bot compare the system clock with hardcoded clock in it's script so you need to changes the schedule in the code yourself, instruction in code note

step 4
boot the bot by typing the following into cmd:
node index.js
for first startup, it will show QR code which you need to scan with your currently existing whatsapp account with Linked Device feature, this will give the bot your session
the session file only exist within your local system

once you're done all above, the bot is ready
to boot it up back, type the cmd command in step 4
to terminate it, press [ctrl+c], for extra measure terminate background process in your task manager including Node.js and Chromium browser

