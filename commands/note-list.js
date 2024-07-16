const { SlashCommandBuilder } = require('discord.js');
const notes = require('./note-add').notes;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('not-listesi')
        .setDescription('Tüm notların listesini gösterir.'),
    async execute(interaction) {
        if (notes.size === 0) {
            await interaction.reply('Hiç notunuz yok.');
            return;
        }

        let reply = 'Notlar:\n';
        notes.forEach((value, key) => {
            reply += `ID: ${key}, Başlık: ${value.baslik}, Mesaj: ${value.mesaj}\n`;
        });

        await interaction.reply(reply);
    },
};