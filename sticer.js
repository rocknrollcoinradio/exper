var TelegramBot = require('node-telegram-bot-api');

var token = '962354595:AAGdHdj_TSlWkDrbWRIkvN-Yq4XXNWkcASo';
var botOptions = {
    polling: true
};
var bot = new TelegramBot(token, botOptions);

var stickersList = [
    'AAMCAgADGQEAA1BeRFtWwEoO5lmIlQlP1BOousNvZAACNgADimJaOIsLO9a5w4qFx-7dDwAEAQAHbQAD3ZMAAhgE',
    'AAMCAgADGQEAA1JeRFul3sGc0r5byVQ0UNpqnPk_dAACNQADimJaOLkFMML85zzhiCTeDwAEAQAHbQADTXAAAhgE',
    'AAMCAgADGQEAA1ReRFvGsh6V1yykYsMuyEGxzCI2lQACNAADimJaOMRdNx4RTWSJBWTeDwAEAQAHbQADjQ8AAhgE',
    'AAMCAgADGQEAA1ZeRFvg5baHar5yaRnqG7psVvc68gACMwADimJaOOmTScu7meO2OwXeDwAEAQAHbQADBY4AAhgE',
    'BQADAgADxQADEag0BRBpCE1JOT4sAg',
    'BQADAgADwwADEag0BbGlUZ12nxZ8Ag',
    'BQADAgADvwADEag0Bf5nBjEjQyUYAg',
    'BQADAgADyQADEag0BYauZXVnHFqOAg'
    
];
var http = require('http');
http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.send('it is running\n'); }).listen(process.env.PORT || 5000);

bot.getMe().then(function(me)
{
    console.log('Hello! My name is %s!', me.first_name);
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
});

bot.on('sticker', function(msg)
{
    var messageChatId = msg.chat.id;
    var messageStickerId = msg.sticker.file_id;
    var messageDate = msg.date;
    var messageUsr = msg.from.username;

    sendStickerByBot(messageChatId, stickersList[getRandomInt(0, stickersList.length)]);

    console.log(msg);
});

function getRandomInt(aMin, aMax)
{
    return Math.floor(Math.random() * (aMax - aMin + 1)) + aMin;
}

function sendStickerByBot(aChatId, aStickerId)
{
    bot.sendSticker(aChatId, aStickerId, { caption: 'I\'m a cute bot!' });
}
