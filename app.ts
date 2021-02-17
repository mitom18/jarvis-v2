import { CommandClient, Intents } from "./deps.ts";
import { PingCommand } from "./src/commands/ping.ts";
import { JokeCommand } from "./src/commands/joke.ts";
import { ShutdownCommand } from "./src/commands/shutdown.ts";
import appConfig from "./config.ts";

const client = new CommandClient({
    prefix: appConfig.BOT_PREFIX,
    owners: [appConfig.BOT_OWNER_ID],
});

client.on("ready", () => {
    console.info("Bot is up and ready!");
});

client.setPresence({
    name: "Real life",
    type: "PLAYING",
});

client.commands.add(PingCommand);
client.commands.add(JokeCommand);
client.commands.add(ShutdownCommand);

client.connect(appConfig.DISCORD_BOT_TOKEN, Intents.None);
