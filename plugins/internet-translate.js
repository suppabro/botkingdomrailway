const { translate } = require('@vitalets/google-translate-api');
const defaultLang = 'si'
let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0] && !m.quoted) {
        throw `*• Example* :  ${usedPrefix}${command} si how are you`
    }
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)     
    if (!result) throw 'පරිවර්තනය අසාර්ථක විය.'
    m.reply(result.text.toString())
}
handler.help = ['tr <leng> <text>']
handler.tags = ['tools']
handler.command = ['translate', 'tl', 'trid', 'tr']
module.exports = handler
