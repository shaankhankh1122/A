const fs = require("fs");
module.exports.config = {
  name: "Shaan",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "Shaan", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Shaan") ||
     react.includes("shan") || react.includes("SHAAN") || react.includes("SHANI") ||
react.includes("admin ji") ||
react.includes("@shankhank")) {
    var msg = {
        body: `ہـــمــــٓـــارا انـــٓـداز چـــٓــورا لـــٓـینـــے ســٓـے💄👑

اپ ہــــمـٓــــارے جیسـٓـے نہیں ہـــٓــو سکـتـــے 💋🔥`,attachment: fs.createReadStream(__dirname + `/noprefix/10.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }