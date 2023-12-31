let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'URL/ලින්ක් එක ඇතුළු කරන්න කොහෙද?\n> .tinyurl https://google.com'
  let res = await fetch(`https://api.botcahx.eu.org/api/linkshort/tinyurl?link=${text}&apikey=${btc}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'Link Invalid!'
}
handler.help = ['tinyurl'].map(v => v + ' <link>')
handler.tags = ['shortlink']
handler.command = /^tinyurl$/i

module.exports = handler
