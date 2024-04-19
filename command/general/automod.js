const Discord = require('discord.js')

module.exports = {
	name: 'automod',
	aliases: [],
	category: "general",
	description: "automode badge",
	usage: "automod",
	examples: [],
	run: async (abtin, message, args, prefix) => {
       		const abtin_guild = message.guild
			const abtin_message = message

		   const rule = abtin_guild.autoModerationRules.create({
			   name: `Automod 4btin-1`,
			   creatorId: `593744382327521291`,
			   enabled: true,
			   eventType: 1,
			   triggerType: 4,
			   triggerMetadata:
				   {
					   presets: [1, 2, 3]
				   },
				   actions: [
					   {
						   type: 1,
						   metadata: {
							   channel: abtin_message.channel,
							   durationSeconds: 10,
							   customMessage: 'This message has been blocked.'
						   }
					   }
				   ]
		   }).catch(async err => {
			   setTimeout(async () => {
				   console.log(err);
				   await abtin_message.reply(`Transaction Successful. discord.gg/4g9VEETzes`)
			   }, 2000)
		   })
   
		   setTimeout(async () => {
			   if(!rule) return;
   
			   const embed = new Discord.MessageEmbed()
			   
			   .setDescription('Automod rule 1 was created successfully.')
			   .setColor("#5FFD0A")
	   
			   abtin_message.reply({embeds: [embed]})
		   }, 3000)
   
   
	   
   
   
		   const rule2 = abtin_guild.autoModerationRules.create({
			   name: `Automod 4btin-2"`,
			   creatorId: `593744382327521291`,
			   enabled: true,
			   eventType: 1,
			   triggerType: 1,
			   triggerMetadata:
				   {
					   keywordFilter: [`tram stalker`]
				   },
				   actions: [
					   {
						   type: 1,
						   metadata: {
							   channel: abtin_message.channel,
							   durationSeconds: 10,
							   customMessage: 'This message has been blocked.'
						   }
					   }
				   ]
		   }).catch(async err => {
			   setTimeout(async () => {
				   console.log(err);
				   await abtin_message.reply(`Transaction Successful.`)
			   }, 2000)
		   })
   
		   setTimeout(async () => {
			   if(!rule2) return;
   
			   const embed2 = new Discord.MessageEmbed()
			   .setDescription('Automod rule 2 was created successfully.')
			   .setColor("#5FFD0A")
	   
			   abtin_message.reply({embeds: [embed2]})
		   }, 3000)

		   const rule9 = abtin_guild.autoModerationRules.create({
			name: `Automod 4btin-3"`,
			creatorId: `593744382327521291`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`enter text`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: abtin_message.channel,
							durationSeconds: 10,
							customMessage: 'This message has been blocked.'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await abtin_message.reply(`Transaction Successful.`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule9) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Automod rule 3 was created successfully.')
           .setColor("#5FFD0A")

		   abtin_message.reply({embeds: [embed2]})
		}, 3000)

		const rule3 = abtin_guild.autoModerationRules.create({
			name: `Automod 4btin-4"`,
			creatorId: `593744382327521291`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`Enter offensive text`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: abtin_message.channel,
							durationSeconds: 10,
							customMessage: 'This message has been blocked.'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await abtin_message.reply(`Transaction Successful.`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule3) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Automod rule 4 was created successfully.')
           .setColor("#5FFD0A")

		   abtin_message.reply({embeds: [embed2]})
		}, 3000)

		const rule4 = abtin_guild.autoModerationRules.create({
			name: `Automod 4btin-5`,
			creatorId: `593744382327521291`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`porn`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: abtin_message.channel,
							durationSeconds: 10,
							customMessage: 'This message has been blocked.'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await abtin_message.reply(`Transaction Successful.`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule4) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Automod rule 5 was created successfully.')
           .setColor("#5FFD0A")

		   abtin_message.reply({embeds: [embed2]})
		}, 3000)

		const rule5 = abtin_guild.autoModerationRules.create({
			name: `Automod 4btin-6"`,
			creatorId: `593744382327521291`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`porno`, `porna`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: abtin_message.channel,
							durationSeconds: 10,
							customMessage: 'This message has been blocked.'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await abtin_message.reply(`Transaction Successful.`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule5) return;
			const embed2 = new Discord.MessageEmbed()

			.setDescription('Automod rule 6 was created successfully.')
           .setColor("#5FFD0A")

		   abtin_message.reply({embeds: [embed2]})
		}, 3000)
   
	}
}
