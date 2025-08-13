const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEF1cUpRL3R0aGE2U3ZiSXh0U1lsRjlWZGhPUzlQTUZiKzEyTE82djVYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1JXdmlDU2F4c3dzSTFuaGFPYW5lY09DQ0EvMDZxSFo2T3RReW1mY2xqbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SVZFamJDY01ncHI3OFMwcGd3U2Z1dXdGb3hzY3VPSmcxa2puT1hlUVVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVaElaRUhPeGJ0eWw1dlpJeWUvc1h6S002b3lydjNTYWp6NEhrQUpLdkZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNBcHlyTEt6MTRaeVY5L0pyUWZ2Y2gzT1RVbXFXVnVhZHEweDB3eFN3VjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFOQUwrR3hQT2dFUEo2NGNncE1KclUrM3IvWXBJclN4R3VOZjNVSE1LZ0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZub1V6OFF2WWRzUlo0b2cxV283UVBYU0hHR1NMa2tHbnZZcnVUUUMwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWRpb21JQzQzcEVhM3lTZysram5abTkxeENleVdCays3bWdqMTRPeUdVaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAydEdHTHlpN0JiTlpISklvZ1JScVd4Z1lTcUcrZUp2dllTaUYvSE5RTWpYK1JjNkVIMTNEdGQxb0c0TmtpQ09UeHU5RkF0cFBnajVZM0tJMVh6QmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiI4bmwyd3kvamRnNEhYbTR2Um1CWXIrVGsvaTF2RXViWUE1bFZXVXVPYm93PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEzMjAwNjY1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGNDg5MkVFNUNCNDY4OTQwRkMyRTI5MUM1NTYzQzM2NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MDg5OTExfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI4RzNIMVQyWSIsIm1lIjp7ImlkIjoiOTIzMTMyMDA2NjU5OjQ1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InNhZCBnaXJsIiwibGlkIjoiMzgzNTg3NTU5ODM5Njo0NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BmSzN1TURFTzJYOHNRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNiYlVVcGxkOFJKZmxRZGgzY0lXUDBEbkFrWFpRTGpQSldaUDJXY2V6d2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imp1N281OTZxdDlvd3IrYnhHTU9iaEdRM1RGT3NoQ2I5am1xNEdsS2RkSDJRcHhQd1NoY1RjM3pXY01LUlZWdzhtVmcyT3hMSkVIQXAxcnYxVVp5RkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5WlUySjNUQWZmUFQvQkdaRGdaK0Y2aWk5TTdrSlFyMFN5dU5HeExJMjF1WmF1LzN2TmdMMkljZkVxUlJGcnhOcW5yajdtaFJlYVBUUFdhZ01nNjBoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEzMjAwNjY1OTo0NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYRzIxRktaWGZFU1g1VUhZZDNDRmo5QTV3SkYyVUM0enlWbVQ5bG5IczhJIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUwODk5MDUsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOVHQifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Vempire-md 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Vempire-md",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Vempire-md",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "+923132006659",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Vempire-md Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
