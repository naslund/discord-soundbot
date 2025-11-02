import type { Message, TextChannel } from "discord.js";

import * as ignoreList from "~/util/db/IgnoreList";
import localize from "~/util/i18n/localize";

import Command from "../base/Command";

export class UnignoreCommand extends Command {
  public readonly triggers = ["unignore"];
  public readonly usage = "Usage: !unignore <user>";
  public readonly elevated = true;

  public run(message: Message) {
    const { users } = message.mentions;
    if (users.size < 1) {
      (message.channel as TextChannel).send(this.usage);
      (message.channel as TextChannel).send(localize.t("helpers.userFinder.error"));
      return;
    }

    users.forEach((user) => {
      ignoreList.remove(user.id);
      (message.channel as TextChannel).send(localize.t("commands.ignore.remove", { user: user.username }));
    });
  }
}
