const TelegramBot = require('node-telegram-bot-api');
const token = '5199433195:AAFRqWtlsdoRN9u24Oze5g8kK3jtHb9EgM0';
const bot = new TelegramBot(token, {polling: true});


// Конфиг клавиатуры
const keyboard = [
    [
      {
        text: 'Колесо фортуны',
        web_app: {url: 'https://rasskazoff.github.io/fortuneWheel.tg-app/dist/'},        
      }
    ]
  ];

  // обработчик события присылания нам /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

    // отправляем сообщение
    bot.sendMessage(chatId, '<b>Испытай удачу!</b>\nЖми на кнопку 👇', { // прикрутим клаву
        parse_mode: 'HTML',
        reply_markup: {
            //inline_keyboard: keyboard,
            keyboard: keyboard,
            resize_keyboard: true
          }
      });
  });

  bot.on('web_app_data', (app) => {
    const chatId = app.chat.id
    result = app.web_app_data.data
      bot.sendMessage(chatId, result);
  });



  /*
  // Обработчик нажатий на клавиатуру
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    let img = '';
  
    if (query.data === 'moreKeks') { // если кот
      img = 'cat.png';
    }
  
    if (query.data === 'morePes') { // если пёс
      img = 'dog.jpeg';
    }
  
    if (img) {
      bot.sendPhoto(chatId, img, { // прикрутим клаву
        reply_markup: {
          inline_keyboard: keyboard
        }
      });
    } else {
      bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', {
        // прикрутим клаву
        reply_markup: {
          inline_keyboard: keyboard
        }
      });
    }
  });
*/