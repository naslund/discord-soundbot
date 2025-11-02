import type { Message, TextChannel } from "discord.js";

import Command from "../base/Command";

export class PingCommand extends Command {
  public readonly triggers = ["ping"];

  public run(message: Message) {
    (message.channel as TextChannel).send("Pong!");
  }
}
