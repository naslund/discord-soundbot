import { AttachmentBuilder, TextChannel, type Message } from "discord.js";

import { existsSound, getPathForSound } from "~/util/SoundUtil";

import Command from "../base/Command";

export class DownloadCommand extends Command {
  public readonly triggers = ["download"];
  public readonly numberOfParameters = 1;
  public readonly usage = "Usage: !download <sound>";

  public run(message: Message, params: string[]) {
    if (params.length !== this.numberOfParameters) {
      (message.channel as TextChannel).send(this.usage);
      return;
    }

    const sound = params[0];
    if (!existsSound(sound)) return;

    const attachment = new AttachmentBuilder(getPathForSound(sound));
    (message.channel as TextChannel).send({ files: [attachment] });
  }
}
