const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
const token = '962354595:AAGdHdj_TSlWkDrbWRIkvN-Yq4XXNWkcASo';
const bot = new TelegramBot(token, {polling: true});
var http = require('http'); 
http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.send('it is running\n'); }).listen(process.env.PORT || 5000);
bot.on('new_chat_members', function(msg){
    bot.sendMessage(msg.chat.id, 'Hello!', { reply_to_message_id: msg.message_id });
});
bot.on('message', (msg) => {
	const chatId = msg.chat.id;// извлекаем id чата
	const messageUsr = msg.from.username;
	
	if (msg.text) {
		
		const text = msg.text.toLowerCase();
		
		if (~text.indexOf("привет")) {  
			bot.sendMessage(chatId, 'Приветик, ' + messageUsr + '!');
			} else if (~text.indexOf("клав")) {
			openKlava(chatId);
			} else if (~text.indexOf("здраст")) {
			bot.sendMessage(chatId, 'Здравствуй, здравствуй, ' + messageUsr + '!');
			} else if (~text.indexOf("здравст")) {
			bot.sendMessage(chatId, 'Здравствуй, здравствуй, ' + messageUsr + '!');
			} else if (~text.indexOf("дур")) {
			bot.sendMessage(chatId, '' + messageUsr + ', не ругайся, а то обижусь!');
			} else if (~text.indexOf("туп")) {
			bot.sendMessage(chatId, '' + messageUsr + ', не ругайся, а то обижусь!');
			} else {
			bot.sendMessage(chatId, '' + messageUsr + ', я тебя не понимать!');
		}
	}
	bot.forwardMessage(chatId, idAdmin, msg.message_id);
});
