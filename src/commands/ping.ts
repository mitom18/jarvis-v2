import { Command, CommandContext } from "../../deps.ts";

export class PingCommand extends Command {
    name = "ping";
    description = "Prints current ping.";
    execute(ctx: CommandContext) {
        ctx.message.reply(
            `Pong in ${Date.now() - ctx.message.timestamp.getTime()} ms`
        );
    }
}
