import { Command, CommandContext, Embed } from "../../deps.ts";

export class JokeCommand extends Command {
    name = "joke";
    description = "Retrieves random programming joke.";
    async execute(ctx: CommandContext) {
        let joke =
            "// This line doesn't actually do anything, but the code stops working when I delete it.";

        await fetch(
            "https://sv443.net/jokeapi/v2/joke/Programming?format=txt&type=single"
        )
            .then((response) => response.text())
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
