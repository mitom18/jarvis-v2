import { loadConfig } from "./deps.ts";

interface AppConfig {
    DISCORD_BOT_TOKEN: string;
    BOT_OWNER_ID: string;
    BOT_PREFIX: string;
}

const rawConfig = loadConfig({
    safe: true,
    allowEmptyValues: true,
    export: true,
});

const appConfig: AppConfig = {
    DISCORD_BOT_TOKEN: rawConfig.DISCORD_BOT_TOKEN,
    BOT_OWNER_ID: rawConfig.BOT_OWNER_ID,
    BOT_PREFIX: rawConfig.BOT_PREFIX,
};

export default appConfig;
