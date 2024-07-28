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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254794081785";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_07_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY1LFxuICAgICAgICA2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4LFxuICAgICAgICA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICA5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRNlhGNXVkMk90OFNJOFlLSGZxdlZaSGJXRUZDbHUzTFpzbnB1a3BKRFJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5NDA4MTc4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDE0MjMwMUIwNDM2RDlDRDM2M0VFRDVBRDNCQTIzREFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTU3NjYwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlktcEtNdXVlVFJDcWJRNEFkX3B5RndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTMxNTNmNDAtZWFmOS00YWYzLWFkNzMtMjEwYWFkNDBkMzMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMTM4LFxuICAgICAgOTYsXG4gICAgICAyMjcsXG4gICAgICAyNyxcbiAgICAgIDUsXG4gICAgICAxOTMsXG4gICAgICA1NyxcbiAgICAgIDIxLFxuICAgICAgMzEsXG4gICAgICAxNSxcbiAgICAgIDc4LFxuICAgICAgMTcwLFxuICAgICAgNjIsXG4gICAgICA0NCxcbiAgICAgIDg4LFxuICAgICAgMjMwLFxuICAgICAgMTUsXG4gICAgICAxMjksXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMjEzLFxuICAgICAgNTcsXG4gICAgICAxNCxcbiAgICAgIDEyNyxcbiAgICAgIDQ5LFxuICAgICAgMjUxLFxuICAgICAgMTM3LFxuICAgICAgMjMxLFxuICAgICAgMTA4LFxuICAgICAgMyxcbiAgICAgIDgwLFxuICAgICAgMTUzLFxuICAgICAgMTMsXG4gICAgICA3NSxcbiAgICAgIDEzLFxuICAgICAgNDMsXG4gICAgICAzOSxcbiAgICAgIDE3NCxcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdTOExBNkdLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTQwODE3ODU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjg3ODUzNDA2MDAzMjM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdk10YUlERU5TVW1MVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpVazRJZmhMNUNHT2pPcmg3Q294UUtoSy9wQ05yTDRqbnJtVVVoK0hja3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicTBWNktIUlIxVGd5QWwvRzNqNXlobHZ4K3B3SklsaE92MGdMYzVRbldVak52NGVxYjJEYW5ERjVwSnpKYm5SdjBOdW41VkNma0tlaGEwQmpYc2tLQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaXJHcXI5NmVuWWdMOVJNbnMvaE9ldHRiY2poWmtCRFRtdE54TnJZM3N1VkNheXpjNWhlaHJnWlEvZHFRRCtkZHpsdGN0TFVKaWduR1VlWEJUQW1UaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk0MDgxNzg1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTU3NjU3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
