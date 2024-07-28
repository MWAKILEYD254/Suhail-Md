const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254710526436";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_25_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExLFxuICAgICAgICA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAzNixcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MixcbiAgICAgICAgNzksXG4gICAgICAgIDk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDg5LFxuICAgICAgICA0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDUxLFxuICAgICAgICA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NixcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicmU1UkJVcnVUbHdaQXRPNGJmejNOYjBKa3JtMFJPeE5LaTVFWU50M040Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTA1MjY0MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk3QzI0QURBOTg3OTlCQkRCMTkxNDBGRERBQkQ4QTIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE3NjczNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPRUl6S29BUVN1ZWlTczNlTWt3cUFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjMjI3MjVkLWI5YjAtNGJmOC04YzRhLWUwNjZmYzljMGE5OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAxODAsXG4gICAgICA5NSxcbiAgICAgIDksXG4gICAgICAxMTUsXG4gICAgICA5LFxuICAgICAgMTk4LFxuICAgICAgMTg0LFxuICAgICAgODQsXG4gICAgICAxLFxuICAgICAgMjIyLFxuICAgICAgMTg1LFxuICAgICAgOTEsXG4gICAgICA1OCxcbiAgICAgIDE0MSxcbiAgICAgIDcyLFxuICAgICAgMzQsXG4gICAgICAxNTUsXG4gICAgICAzMyxcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDQwLFxuICAgICAgODcsXG4gICAgICAxNjEsXG4gICAgICAzMCxcbiAgICAgIDIxNCxcbiAgICAgIDE2MSxcbiAgICAgIDIxOCxcbiAgICAgIDI5LFxuICAgICAgMjEsXG4gICAgICA5MCxcbiAgICAgIDgxLFxuICAgICAgNzcsXG4gICAgICAxOTIsXG4gICAgICAxMjAsXG4gICAgICAxMTksXG4gICAgICA3NCxcbiAgICAgIDE4NCxcbiAgICAgIDIxMSxcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZISEVBVlBGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTA1MjY0MzY6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU4Nzg4OTY4MDM5MjU6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJK1N1Wk1DRU5PcG1iVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZxQW93WlNCNnRNbEVQSnZDeVJISzNIVm9tSkhKYzQ3SFpGQVpTaUNUbGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQmhVc1M0Zjc2bkhlYi80T0IzS3hDUkJTdGpFdVhHeStiS0xMdFM5VGRncUkra0hkYlVvcGRnYjFockVBS0JHSlBXMDVPU28wVHozWktIQWcydVo0RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTDg5SHQ0bzhBQTQyRjAyZ1NLeSs5VWhyVUVJbkZxaEZoUWtjd1c2a3QrK3JCTWdWeEZ2R3JKN04vdW5aRjdQbEgzY2h6U3RxWnhrdXFKUEFROUEyakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzEwNTI2NDM2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTc2NzI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTmlZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOaVkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyenhGblFZN1VCMkdQN0x0TEJIam10WGdQZUJDWlNpd3dOdW5VUEp2TnFjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU3NzY1MzAwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMDA2NTE5NDk4XCJ9Igp9"

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
