const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")

client.on("ready", () => {
console.log(`${client.user.tag} Bot Online!`)
client.user.setActivity(`Zulema Zahir ♡`)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`${files.length} Total Command!`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`${props.help.name} Named Command Online!`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
1081703958306889828
1082331974452129803

 1082334155339206807 
 1082334227862917232