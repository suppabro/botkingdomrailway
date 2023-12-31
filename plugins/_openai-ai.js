var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `ප්රශ්නයක් ඇතුළත් කරන්න!\n\n*උදාහරණයක්:* Who is ranil`
try {
  await m.reply(wait)
  var apii = await fetch(`https://api.botcahx.eu.org/api/search/openai-chat?text=${text}&apikey=${btc}`)
  var res = await apii.json()
  await m.reply(res.message)
} catch (err) {
  console.error(err)
  throw "ප්‍රශ්නයට පිළිතුරු දීමේදී දෝෂයක් ඇති විය"
}
}
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['tools'];
handler.premium = false
module.exports = handler;
