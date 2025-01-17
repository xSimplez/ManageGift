//engilsh
let config = require(`../config.js`);
let e = config.emojis;
let prefix = config.prefix;

module.exports = {
    start: {
        perms: `${e.error} You do not have permission \`MANAGE_MESSAGES\`, you can create a rank for implementation:`,
        channel: `${e.error} You should mention on \`valid channel!\`\n> Ex: ${prefix}start \`#giveawaychannel (giveawaychanne: this channel)\` 1h 1 Nitro!`,
        duration: `${e.error} Type a valid \`time\` please!\n> Ex: \`1d (1 day)\`, \`1h (1 hour)\`, \`1m (1 minute)\`, \`1s (1 seconds)\`!`,
        argswinners: `${e.error} Type the \`number of winners!\`\n> Ex: \`${prefix}start #giveawaychannel 1h 4(4: number of winers) Nitro\``,
        prize: `${e.error} Add the \`prize\` please!\n> Ex: ${prefix}start #giveawaychannel 1h 1 \`Nitro(Nitro: the prize)\``,
        good: `${e.success} **I launched the \` giveaway \` in the living room:**`,
  
        giveaway: `${e.gift} **GIVEAWAY START** ${e.gift}`,
        giveawayEnded: `${e.end} **GIVEAWAY ENDED** ${e.end}`,
  
        timeRemaining: `**REMAINING TIME ${e.time}:** **{duration}**!`, 
        inviteToParticipate: (message) => `REACT WITH ${config.reaction} TO ENTER!`,
        winMessage: (message) => `${config.reaction} | Congratulations, {winners}! You Won: **{prize}**!`,
        embedFooter: `**GIVEAWAY**`,
        noWinner: `❌ Giveaway cancelled, not enough participants :(`,
        hostedBy: `**HOSTED BY ${e.hoste}:** {user}`,
        winners: `WINNER(S)`,
        endedAt: `ENDS AT`,
      },
    
      units: {
        seconds: `second(s)`,
        minutes: `minute(s)`,
        hours: `hour(s)`,
        days: `day(s)`,
      },
  
      end: {
        perms: `${e.error} You do not have permission \`MANAGE_MESSAGES\`, you can create a rank for implementation:`,
        msg: `${e.error} You have to specify a valid message ID!`,
        err: `${e.error} Unable to recognize this id giveaway:`,
        errmod: `${e.error} This giveaway already ended or deleted!`,
        good: `${e.success} The giveaway will be finished in less than:`
      },
  
      reroll: {
        perms: `${e.error} You do not have permission \`MANAGE_MESSAGES\`, you can create a rank for implementation:`,
        msg: `${e.error} You have to specify a valid message ID!`,
        err: `${e.error} Unable to recognize this id giveaway:`,
        good: `:tada: New winner(s): {winners}! Congratulations!`,
        parts: `${e.error} There weren't enough participants for this giveaway i can't choose!`
      },
  
      edit: {
        perms: `${e.error} You do not have permission \`MANAGE_MESSAGES\`, you can create a rank for implementation:`,
        msg: `${e.error} You have to specify a valid message ID!`,
        argswinners: `${e.error} type the \`number of winners!\`\n> Ex: \`${prefix}start #giveawaychannel 1h 2(2: number of winers) Nitro\``,
        prize:  `${e.error} add the \`prize\` please!\n> Ex: ${prefix}start #giveawaychannel 1h 2 \`Nitro (Nitro: the prize)\``,
        err: `${e.error} Unable to recognize this id giveaway:`,
        good: `${e.success} The giveaway will be modified using the new parameters. The changes will take effect within 5 seconds!`,
        errmod: `${e.error} An error occurred, maybe this giveaway is already finished or deleted?!`
      },
  
      lang: {
        perms: `${e.error} You do not have permission \`MANAGE_MESSAGES\`, you can create a rank for implementation:`,
        msg: `${e.error} please enter a vaild language (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
        err: `${e.error} The chosen language is already the one active on this server. Try another one to see?!`
      },
  
      set: {
        perms: `${e.error} You do not have permission \`MANAGE_MESSAGES\`, you can create a rank for implementation:`,
        msg: `${e.error} Please indicate a function to be defined \`mention\` to mention the entire server if a giveaway is running, \`logs\` to define a room with the giveaway logs, and \`role\` choose a role so that users who have it can launch giveaways without having permission to manage messages.`,
        args: `${e.error} Please indicate a function \`on\` to activate or \`off\` to disable.`,
        erroff: `${e.error} This function is already disabled. Try turning it on to see?`,
        erron: `${e.error} This function is already activated. Try turning it off to see? `,
        mon: `${e.success} I have activated the function \`everyone\` for the next giveaways.`,
        moff: `${e.success} I've disabled the function \`everyone\` for the next giveaways.`,
        channel: `${e.error} Please point me to a giveaway logs room, \n> Ex: ${prefix}set logs \`#logs\` to define the logs.`,
        chon: `${e.success} I set up the giveaways logs on the channel:`,
        role: `${e.error} Please select a valid role!\n> Ex: ${prefix}set role \`@giveaways\` to specify a role.`,
        ron: `${e.success} I defined the alternative role with:`,
      },
  
      logs: {
        raddtitle: "New member",
        raddmsg1: "The member",
        raddmsg2: "just joined the giveaway",
        rremtitle: "Former participant",
        rremmsg1: "The member",
        rremmsg2: "just canceled his entry in the giveaway",
      },

      invite: {
        main: `Main links`,
        disc: `Type \`${prefix}invite copy\` to be able to copy the link!`,
        web: `${e.link} ManageGift's Website`,
        inv: `${e.add} Invite ManageGift's Bot`,
        vote: `${e.vote} Vote For ManageGift's Bot`,
        sup: `${e.supp} Join The Support Server`
      },

    help:{
    title: `ManageGift's Information:`,
    disc: 'It is an open source bot that allows you to create giveaway with ease and gives you many distinct features. The bot is Programmed in `javascript language` and By: ! -  HaDi KouBeIssI | 🇱🇧#4001',
    cm: `__${e.command} ManageGift's Commands:__`,
    cmd: `**${prefix}start ${e.right} To create giveaway.**\n**${prefix}end ${e.right} To end giveaway start.**\n**${prefix}edit ${e.right} To edit giveaway.**\n**${prefix}reroll ${e.right} To Choose a new winner.**\n **${e.featured}__Featured commands:__**\n**${prefix}setlang ${e.right} To change the languag of bot.**\n**${prefix}set logs ${e.right} For setup the room of logs.**\n**${prefix}set mention on ${e.right} To active the mention on all start giveaway.**\n**${prefix}set mention off ${e.right} To disabel the mention on all start giveaway.**`,
    cmm: `__${e.command} Info Commands__`,
    cmdd: `**${prefix}help ${e.right} display commands and info of bot list.**\n**${prefix}ping ${e.right} display bot Latency.**\n**${prefix}invite ${e.right} display main links of bot.**`,
    stats: `__${e.stats} Statistics:__`,
    stat: `\`Servers:\``,
    set: `\`Users:\``,
    ver: `__${e.ver} Versions:__`,
    moreinfo: `__${e.info} MoreInfos:__`,
    comd: `\`Total Commands:\``,
    giv: `\`All Giveaways:\``,
    link: `__${e.link} Links:__`
      },

    prefixerror: `${e.error} Type a valid prefix!.`,
    setprefix: `${e.success} The prefix on this server has been changed to `,  
    
    info:{
        ping: `> ${e.ping} My Ping is `,
    }
}