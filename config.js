global.owner = ['94704029017']  
global.mods = ['94704029017'] 
global.prems = ['94704029017']
global.nameowner = 'Tio'
global.numberowner = '94704029017' 
global.mail = 'botkingdom@gmail.com' 
global.gc = 'https://chat.whatsapp.com/DNUr9fAAaTq6YW3SFQHX7Q'
global.instagram = 'https://chat.whatsapp.com/DNUr9fAAaTq6YW3SFQHX7Q'
global.wm = '© Botkingdom'
global.wait = '_*✨ "Enchanting Transformation" ✨*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ ස්ටිකර් නිර්මාණය වෙමින් පවතී...*'
global.packname = 'Made With'
global.author = 'Botkingdom'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'ZwzGFWAi' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'ZwzGFWAi'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'ZwzGFWAi' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
