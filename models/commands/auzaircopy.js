const fs = require("fs");
module.exports.config = {
	name: "npxs4",
		version: "1.0.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs4",
		cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Admin")==0 || event.body.indexOf("admin")==0 || event.body.indexOf("Uzair")==0 || event.body.indexOf("uzair")==0) {
		var msg = {
				body: "Mujhe Shoq hai tumse guftgu ka 🥰 warna waqt tw ham khud ko bhi dete",
				attachment: fs.createReadStream(__dirname + `/noprefix/ishq.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
		api.setMessageReaction("👑", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}