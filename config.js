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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_30_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgMTEzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDkxLFxuICAgICAgICA5LFxuICAgICAgICA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0LFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICA4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDkxLFxuICAgICAgICA1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg0LFxuICAgICAgICA2LFxuICAgICAgICAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDkwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUzLFxuICAgICAgICA2NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiay85OFloNndOQ2hIaEhxYW1URkdVM2toT3VJU1ZMNmNhbnNVQ294RzcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc1NzU2NzA5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUJFRERFMUFFM0NGRDM2NTREN0ExODc4NkFBNkZEMjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTU1NDQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFrWmlUMlFYU0VpNmlRQ0E5WXZGYVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDg4YTU2OGItNDc0MC00N2YxLWJmMmMtYTE4MTUyMDhkMjExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAxNDgsXG4gICAgICA4MyxcbiAgICAgIDcxLFxuICAgICAgMTYsXG4gICAgICA0MyxcbiAgICAgIDkxLFxuICAgICAgMTI4LFxuICAgICAgMzgsXG4gICAgICAyMjEsXG4gICAgICA0OSxcbiAgICAgIDExOSxcbiAgICAgIDYwLFxuICAgICAgMTk2LFxuICAgICAgNDcsXG4gICAgICAxNTIsXG4gICAgICA0NyxcbiAgICAgIDE1MixcbiAgICAgIDE5NixcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAxMTQsXG4gICAgICAxMTEsXG4gICAgICA2OCxcbiAgICAgIDEwLFxuICAgICAgMzMsXG4gICAgICAxNjIsXG4gICAgICAxODQsXG4gICAgICA1MixcbiAgICAgIDQsXG4gICAgICAxOSxcbiAgICAgIDE2MCxcbiAgICAgIDEwMCxcbiAgICAgIDI2LFxuICAgICAgNTIsXG4gICAgICA3LFxuICAgICAgMTksXG4gICAgICA4NCxcbiAgICAgIDQ0LFxuICAgICAgMjM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjg1R0MzNlM4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTc1NjcwOTM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNdyDDgmvEqyBEw7hcIixcbiAgICBcImxpZFwiOiBcIjEyMzg1NDQ5MjAzNzMwMToxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQR2w4Y0lCRUttRG1MVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpRcHk2Q21KZHJ2UVUra2V4SXVuRHdJV1JocW5RS0d3VUpzdVlTUDlMWFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwickdSWTA3Rzl5WnBNaG9xdElGRE1tV2RUQURicTlaY3kwUDZBeGJCVXltK1kvWktQYUJKODFtM3RpeFBtemkvQWszUEwzcXR6L1E5eWZLbEhxZ2hhRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYm8zZFRESU56NnBFWHAvL3VqL2l2VG0yRjFBQXhVbmpwYmxDRUIzcXFqR0wvWFkzZHdhNDAwcmUwVkFwRGJHTnRBNnRhczdNMnppcWRLaGNveTFnaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU3NTY3MDkzOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNTU0MzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"
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
