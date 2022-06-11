let handler = async(m, { conn, command, text }) => {
  if (!text) throw `Masukkan anime-nya!`
  m.reply(wait)
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw `${command} *${text}* tidak ditemukan!` //await res.text()
  let json = await res.json()
  let { title, synopsis, episodes, url, rated, score, image_url } = json.results[0]
  let ingfonya = `✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
💚️ *Synopsis:* ${synopsis}
`.trim()
conn.sendTBL(m.chat, ingfonya, wm, image_url, `🌐 Url Anime Info ${text}`, `${url}`, null, m)
} 
handler.help = ['animeinfo <query>']
handler.tags = ['anime']
handler.command = /^(anime?ing?fo|ing?foanime?)$/i

handler.register = true 

module.exports = handler
