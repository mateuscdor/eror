let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let youtube = global.yt
let owner = global.owner
let anu = `Hallo mypren ๐
*MAAF KAK FITUR JADIBOT TIDAK ADA DI DALAM FITUR KAMI*
โฉยป *Kalau kakak mau jadi bot silahkan jasa run aja kak*
          
โโโใ ๐ง *HARGA* ๐ง ใโโ๊ฅ
โฌก *1 minggu * 15.000
โฌก *3 minggu:* 25.000
โฌก *Tutorial Jadibot:* 50.000
โโโโโโโโโโโโโโโโโโโ๊ฅ
โโโโใ ฤฑll *PAYMENT* llฤฑ ใโโ๊ฅ
โฌก *DANA:* ${6285850539404}
โฌก *PULSA:* ${6285850539404}
โฌก *YouTube:* ${'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ'}
โโโโโโโโโโโโโโโโโโโ๊ฅ
โโโใ ๐ฎ *RULES* ๐ฎ ใโ๊ฅ
โฌก [โ] *Dana yang sudah masuk tidak bisa di kembalikan*
โฌก [โ] *Kalau akunmu ke banned bukan urusan saya*
โโโโโโโโโโโ๊ฅ
Jika anda berminat hubungi nomor di bawah!!
โฉยป *jangan lupa donasi kak* ยซโจ
Terimakasih yang sudah mendonasikan untuk bot

Contact person Jasa Tutorial:
wa.me/${6285850539404} (Owner)

*Follow Instagram ku juga kak๐ผ*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, '๐ฟ๐ค๐ฃ๐๐จ๐', '.donasi', '๐๐๐ฌ๐๐ฝ๐ค๐ฉ', '.sewaoscar', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler
