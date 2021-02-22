import { CommandClient, Intents, cron, TextChannel, Embed } from "./deps.ts";
import { PingCommand } from "./src/commands/ping.ts";
import { JokeCommand } from "./src/commands/joke.ts";
import { ShutdownCommand } from "./src/commands/shutdown.ts";
import appConfig from "./config.ts";
import { getTextChannel } from "./src/utils/textChannel.ts";
import { getProgrammingJoke } from "./src/service/jokeService.ts";

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

console.info("Installing crons...");

// every day at 06:00
cron("0 0 6 * * *", () => {
    getTextChannel(client, appConfig.DEFAULT_GUILD_CHANNEL).then(
        (channel: TextChannel) => {
            getProgrammingJoke()
                .then((data) => {
                    const embed = new Embed({
                        title: "Random joke",
                        description: data,
                    }).setColor("random");
                    channel.send(embed);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    );
});

console.info("Crons successfully installed!");
