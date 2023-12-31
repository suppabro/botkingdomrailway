let handler = async m => {

let intro = `╭─── *「 Kartu Intro 」*
│       
│*නම     :*
│ *ලිංගභේදය:*
│ *වයස:*
│ *විනෝදාංශය :*
│ *පන්තිය:*
│ *සම්භවය:*
│ *ආගම :*
│ *තත්ත්වය:*
╰──────────────`
m.reply(intro)
}
handler.command = /^(intro)$/i

module.exports = handler
