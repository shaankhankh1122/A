const fs = require("fs");
module.exports.config = {
  name: "eid",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "uzairrajput", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("ঈদ মোবারক ") ||
     react.includes("eid mubarak") || react.includes("Eid Mubarak") || react.includes("Êîd mübãrãk") ||
react.includes("eid") ||
react.includes("Eid")) {
    var msg = {
        body: `🥀KHAIR MUBARAK 🥀 ${name} APKO BHI EID UL ADHA MUBARAK BABU  😌👈`,attachment: fs.createReadStream(__dirname + `/uzair/Eid.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐐", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }