 const fs = require("fs");
module.exports.config = {
  name: "react",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "Uzair Rajput", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Kiran") ||
     react.includes("kiran") || react.includes("KIARAN") || react.includes("adminji") ||
react.includes("Kìrâñ RajPööt") ||
react.includes("@kìrâñRajPööt")) {
    var msg = {
        body: `* ★Ø₩₦EƦ +MλÐE B¥ *
              * kìrâñ RajPööt ☠️🏴‍☠️*

☞𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞:https://www.facebook.com/profile.php?id=100086716792385

★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 : kìrâñ RajPööt`,attachment: fs.createReadStream(__dirname + `/noprefix/00.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }