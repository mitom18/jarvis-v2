import { Command, CommandContext, Embed } from "../../deps.ts";
import { getProgrammingJoke } from "../service/jokeService.ts";

export class JokeCommand extends Command {
    name = "joke";
    description = "Retrieves random programming joke.";
    async execute(ctx: CommandContext) {
        let joke =
            "// This line doesn't actually do anything, but the code stops working when I delete it.";

        await getProgrammingJoke()
            .then((data) => {
                joke = data;
            })
            .catch((error) => {
                console.error(error);
            });

        const embed = new Embed({
            title: "Random joke",
            description: joke,
        }).setColor("random");

        ctx.message.channel.send(embed);
    }
}
