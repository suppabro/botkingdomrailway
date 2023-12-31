let fetch = require('node-fetch')
let handler = async (m, { text }) => {
if (!text) throw `Apikey ඇතුළු කරන්න!`
  try {
    let api = await fetch(`https://api.botcahx.eu.org/api/checkkey?apikey=${text}`)
    let body = await api.text()
    m.reply(body)  
  } catch (e) {
    console.log(e) 
    m.reply('Apikey ලියාපදිංචි කර නැත!')
  }
}          
handler.command = handler.help = ['checkapi','api'];
handler.tags = ['main'];
handler.private = true
module.exports = handler;
