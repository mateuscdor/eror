let handler = async (m, { conn }) => {
	
	// Link Script jgn di ganti ya KONTOL
    // Kalo mau masukin github kamu tinggal add aja link githubnya tapi jangan di hapus sumber script!
    // Jangan Ngeyell..
    // Kalo ngeyel gk bakal up sc lagi
    
    let txt = `
Bot ini menggunakan script github

πππͺ π¨ππ§ππ₯π©?
πΎππ  ππ€πͺππͺππ πππ¨π’πππ€π©π―  π€πππ
Script original By Aine-Md
`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler

