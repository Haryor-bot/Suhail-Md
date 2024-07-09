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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_43_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzksXG4gICAgICAgIDg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICA2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid3h1UllNS2trM1FaOWpkeCtDODNtYnJ5SmxDNjFFeVZKOFR0N0JmVVB3Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia2YwMWxSdlRTU0taUU5ETWFYVTdxd1wiLFxuICBcInBob25lSWRcIjogXCIzZWJiNDBkNC05ZmFjLTRkMDItODhjOC1mZTcxZWIyODAxMmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgNSxcbiAgICAgIDYzLFxuICAgICAgOSxcbiAgICAgIDIxMCxcbiAgICAgIDEzLFxuICAgICAgMTY0LFxuICAgICAgMjA3LFxuICAgICAgMTQ0LFxuICAgICAgOTgsXG4gICAgICAxMDAsXG4gICAgICAyMzIsXG4gICAgICA4MCxcbiAgICAgIDE5MixcbiAgICAgIDI0MSxcbiAgICAgIDIyNixcbiAgICAgIDQxLFxuICAgICAgMTEsXG4gICAgICA4OCxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICA4NixcbiAgICAgIDI1LFxuICAgICAgMTA3LFxuICAgICAgNDQsXG4gICAgICAyMDIsXG4gICAgICA5MyxcbiAgICAgIDE5NCxcbiAgICAgIDY3LFxuICAgICAgMTMxLFxuICAgICAgMjIxLFxuICAgICAgNzksXG4gICAgICA4NyxcbiAgICAgIDM3LFxuICAgICAgMjI0LFxuICAgICAgMjAwLFxuICAgICAgNTYsXG4gICAgICAzNyxcbiAgICAgIDI1MSxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3VFhKOVNBUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NjI3MzkzODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkF5Q29uc3VsdFwiLFxuICAgIFwibGlkXCI6IFwiOTAyNTQ1MjY2NDQ0Nzc6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlhDdHJJRUVLblVzN1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1eUNLdmc3SHpqelVsYis5OXZkYXBJK2pjamxmWVZDOGxteThBazU0RVNvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVQam1JNFVZVWN1eTZFM3hMbENDUzJqbkhtdzNtZ1Q4Smd5VHBRZGVCZnlVeGZrNFpoOUJpNHZCTEdZcFVBM05PSWVSM1JGakE5cXRhQkdlWHlYdEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVVaWJtaUlJUGFRMEtVTzFtbURTU2hMQWhLSWN2QzdxRnlNOW5iakdmMm0rdHBwZUE3VTJ3TzkyT2lTYUR2aG5tQnNySmVHWDRlVGdydGdhT05MUWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjYyNzM5Mzg6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUxMTAyMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
