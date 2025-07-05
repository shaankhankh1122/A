module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "uzairrajput",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["61552682190483", "61552682190483"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] You don't have permission to use this command, This Command Only For only Uzair Rajput", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} Uzair Mtx Bot are now turned off.`,event.threadID, () =>process.exit(0))
}
