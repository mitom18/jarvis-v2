import { Command, CommandContext } from "../../deps.ts";

export class ShutdownCommand extends Command {
    name = "shutdown";
    description = "Logs out the bot and shuts down the program.";
    ownerOnly = true;
    async execute(ctx: CommandContext) {
        await ctx.message.reply("Logging out...");
        ctx.client.setPresence({
            status: "offline",
        });
        await ctx.client.destroy();
        Deno.exit();
    }
}
