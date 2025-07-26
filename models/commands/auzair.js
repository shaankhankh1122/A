const fs = require("fs");
module.exports.config = {
  name: "uzair",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "†『 ⸙ †ĸɩŋʛ ʋʑʌɩʀ ŋʋsʌɩɓʌ.𝐱͜͡ᴆ 』† ", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "npxs5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("admin")==0 || event.body.indexOf("Admin")==0 || event.body.indexOf("Uzair")==0 || event.body.indexOf("uzair")==0) {
    var msg = {
        body: `*★Ø₩₦EƦ +MλÐE B¥ *
              *𝑴𝒓𝑼𝒛𝒂𝒊𝒓-𝑴𝑻𝑿*

☞𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞:https://www.facebook.com/profile.php?id=61552682190483

★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 : 𝑴𝒓𝑼𝒛𝒂𝒊𝒓-𝑴𝑻𝑿 💚✨`,
        attachment: fs.createReadStream(__dirname + `/noprefix/uzair.jpeg`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👑", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }