import { Client, TextChannel } from "../../deps.ts";

export const getTextChannel = async (
    client: Client,
    channelId: string
): Promise<TextChannel> => {
    return (client.channels.get<TextChannel>(
        channelId
    ) as unknown) as TextChannel;
};
