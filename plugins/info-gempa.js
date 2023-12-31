var axios = require('axios');
var handler = async (m, { conn }) => {
try {
var dataGempa = [];
  var response = await axios.get(`https://api.botcahx.eu.org/api/search/gempa?apikey=${btc}`);
  var res = response.data;
  var gambar = res.result.Map;
  dataGempa.push({
    waktu: res.result.Waktu,
    lintang: res.result.Lintang,
    bujur: res.result.Bujur,
    magnitude: res.result.Magnitudo,
    kedalaman: res.result.Kedalaman,
    wilayah: res.result.Wilayah
  });
  var caption = `කාලය : ${dataGempa[0].waktu}\එන් ලින්ටැන්ග් : ${dataGempa[0].lintang}\nBujur : ${dataGempa[0].bujur}\nMagnitude : ${dataGempa[0].magnitude}\nKedalaman : ${dataGempa[0].kedalaman}\nWilayah : ${dataGempa[0].wilayah}`;
  conn.sendFile(m.chat, gambar, 'map.png', caption, m);
} catch(e) {
  console.log(e);
  conn.reply(m.chat, 'භූමිකම්පා දත්ත ලබා ගැනීමේදී දෝෂයක් ඇති විය', m);
}
};
handler.command = handler.help = ['infogempa', 'gempa'];
handler.tags = ['info'];
handler.premium = false;
handler.limit = true;
module.exports = handler;
