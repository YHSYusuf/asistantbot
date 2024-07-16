const { SlashCommandBuilder } = require('discord.js');
const events = require('./event-add').events;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('etkinlik-listesi')
        .setDescription('Takvimdeki tüm etkinliklerin listesini gösterir.'),
    async execute(interaction) {
        if (events.size === 0) {
            await interaction.reply('Hiç etkinliğiniz yok.');
            return;
        }

        let reply = 'Etkinlikler:\n';
        events.forEach((value, key) => {
            reply += `ID: ${key}, Tarih: ${value.tarih}, Başlık: ${value.baslik}, Açıklama: ${value.aciklama}\n`;
        });

        await interaction.reply(reply);
    },
};