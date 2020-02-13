var TelegramBot = require('node-telegram-bot-api');
 
var token = '962354595:AAGdHdj_TSlWkDrbWRIkvN-Yq4XXNWkcASo';
var botOptions = {
    polling: true
};
var bot = new TelegramBot(token, botOptions);
const idAdmin = 945447562;
var http = require('http');http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.send('it is running\n'); }).listen(process.env.PORT || 5000);
 
bot.getMe().then(function(me)
{
    console.log('Hello! My name is %s!', me.first_name);
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
});
 
bot.on('text', function(msg)
{
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
 
    if (messageText === '/keys') {
        var opts = {
            reply_to_message_id: msg.message_id,
            reply_markup: JSON.stringify({
                keyboard: [
                    ['Yes'],
                    ['No']
                ]
            })
        };
        bot.sendMessage(messageChatId, 'Do you love me?', opts);
    }
 
    if (messageText === 'Yes') {
        bot.sendMessage(messageChatId, 'I\'m too love you!', { caption: 'I\'m bot!' });
    }
 
    if (messageText === 'No') {
        bot.sendMessage(messageChatId, ':(', { caption: 'I\'m bot!' });
    }
});
