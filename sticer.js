const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
const token = '962354595:AAGdHdj_TSlWkDrbWRIkvN-Yq4XXNWkcASo';
const bot = new TelegramBot(token, {polling: true});
var http = require('http'); 
http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.send('it is running\n'); }).listen(process.env.PORT || 5000);
bot.on('new_chat_members', function(msg){
	const chatId = msg.chat.id;// извлекаем id чата
    bot.sendMessage(msg.chat.id, 'Hello!', { reply_to_message_id: msg.message_id });
});
