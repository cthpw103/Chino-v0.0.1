// even the ping command is shit
const Command = require("../lib/Command");
const { CommandCategories }  = require("../lib/Constants");
class PingCommand extends Command {
    constructor(...args) {
        super(...args, {
            usage: "None",
            category: CommandCategories.GENERAL,
            description: "Pings bot idk"
        });
    }

async run(msg, args) {
var message = await msg.channel.createMessage(`Pong! :ping_pong:`); //define the message we sent so we can edit it
var timestamp = message.timestamp // the time the msg was sent ouo
message.edit(`Ping took ${new Date() - timestamp} ms! :ping_pong:`) // calculate ping on the time msg was sent and the current time
}
}

module.exports = PingCommand;
