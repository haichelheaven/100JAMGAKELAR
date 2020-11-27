exports.menu = (id, HAIKALBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

╔════════════════════
║ *FITUR BOT ${HAIKALBOT}*
╠════════════════════
║╭──❉ *STICKER MAKER* ❉──
║│1. *#sticker*
║╰───────────
╠════════════════════
║╭──❉ *MEDIA* ❉──
║│1. *#ytmp3* <linkyoutube>
║│2. *#ytmp4* <linkyoutube>
║│3. *#tiktok* <linktiktok>
║│4. *#ig* <linkIg>
║│5. *#fb* <linkFb>
║│6. *#twt* <linkTweet>
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *#wiki* <query>Wikipedia.
║│2. *#nulis* <teks>
║│3. *#quran*
║│4. *#pantun*
║│5. *#nama* <nama anda>
║│6. *#pasangan* <Aris & Cahya>
║│7. *#lirik* <nama lagu>
║│8. *#chord* <nama lagu>
║╰───────────
╠════════════════════
║  *${HAIKALBOT}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *#sholat* <daerah>
║│2. *#covid*
║│3. *#infogempa*
║╰───────────
╠════════════════════
║  *${HAIKALBOT}*
╠════════════════════
║╭──❉ *CONTACT* ❉──
║│1. *#creator*
║│2. *#owner*
║╰───────────
╠════════════════════
║  *${HAIKALBOT}*
╠════════════════════
║╭──❉ *IMPORTANT* ❉──
║│1. *#info*
║│3. *#donasi*
║╰───────────
╠════════════════════
║  *${HAIKALBOT}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *#tts* <teks>
║│2. *#quotes*
║│3. *#foto cewek*
║│4. *#foto cowok*
║│5. *#pokemon*
║│6. *#loli*
║│7. *#hentai*
║│8. *#fotoanime*
║│9. *#namaninja* <nama lu>
║│10. *#alay*  <teks>
║│11. *#say*  <teks>
║│12. *#infoig* <@username>
║╰───────────
╠════════════════════
║  *${HAIKALBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${Haikal}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY HAIKAL BOT*
╚════════════════════`
}

