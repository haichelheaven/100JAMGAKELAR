exports.donate = (id, HaikalBot, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╔════════════════════
║ *Donasi Ke ${Haikal}*
╠════════════════════
║├≽️⚜ *OVO*: _NANTI_
║├≽️⚜ *PULSA*: _NANTI_
║├≽️⚜ *GOPAY*: _NANTI_
╠════════════════════
║  *${Haikal}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${A187}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY HAIKAL BOT*
╚════════════════════`
}

