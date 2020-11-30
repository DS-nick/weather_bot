const fetch = require('node-fetch');
const querystring = require('querystring')
const aaSqlite = require("aa-sqlite");
const moment = require('moment');
const express = require('express')
require('dotenv').config();
console.log('work', process.env.TELEGRAM_TOKEN)


const app = express()
app.get('/', (req,res)=> {
    res.send('main work')
})

app.get('/tgHook', (req, res)=> {
    res.send('work')
})

// async function tg_bot() {
// await aaSqlite.open('./weather.db')

// await aaSqlite.get(`create table if not exists message (update_id INTEGER)`);
// let list_of_messages= []
// const bot_res = await  fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/getUpdates`)

// const bot_result = await bot_res.json()
// const message = bot_result.result
// console.log(message)
// const last_message= message[message.length - 1]
// const sql_res = await aaSqlite.get(`select count(*) as length from message`);
// const last_value = sql_res.length - 1
// const last_sql = await aaSqlite.get(`select update_id from message limit 1 OFFSET ${last_value}`);

// if(!last_sql) return
// if(last_sql.update_id && last_sql.update_id !== last_message.update_id) {
//     console.log('HERE')
//     list_of_messages.push(last_message)
//     await aaSqlite.get(`insert into message values (${last_message.update_id})`);
// }

// if(list_of_messages.length  >0) {
//     const message_text = await message_from_bot(last_message.message.text)

// const params = {
//     chat_id: last_message.message.chat.id,
//     text: message_text,
//     parse_mode: 'Markdown'
    
// }
//     const tg_res = await fetch(`https://api.telegram.org/bot1444703979:AAEH5sSqoODQz9DM1uIa-fEyQj5iqP8rXqU/sendMessage?${querystring.stringify(params)}`)

// console.log(tg_res.status)
// list_of_messages = []
// }

// };


// async function message_from_bot(message) {
//     const emodji_list = {
//         Mist: `🌫️`,
//         Rain: `🌧️`,
//         Clouds: `☁️`,
//         Clear: `☀️`,
//         Snow: `❄️`,
//         Fog: `🌫️`
//     }
//     return new Promise(async(resolve, reject)=> {
//         if(message == '/start') {
//             resolve(`
//             Введите название города например almaty
//             `)
//         }
//         const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${message}&units=metric&appid=de7070e90d729c6aeecd52d192810178`)
//         const res_json = await res.json()
//         console.log(res_json)
//         if(res_json.cod == '404') {
//             resolve('город не найден')
//         }
//         if(res_json.cod == '200') {
//             console.log(moment.utc(res_json.dt*1000).utcOffset(res_json.timezone).format())
//             resolve(`${emodji_list[res_json['weather'][0]['main']]} 🌡️ ${res_json['main']['temp']}`)
//         }
        
//     })
// }

// setInterval(tg_bot, 1000)


 app.listen(80, ()=> {
    console.log('App work in port 3000')
})