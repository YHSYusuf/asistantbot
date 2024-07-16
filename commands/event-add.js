const { SlashCommandBuilder } = require('discord.js');
const events = new Map();
let eventId = 0;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('etkinlik-ekle')
        .setDescription('Takvime yeni bir etkinlik ekler.')
        .addStringOption(option =>
            option.setName('tarih')
                .setDescription('Etkinlik tarihi (YYYY-MM-DD formatında)')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('baslik')
                .setDescription('Etkinlik başlığı')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('aciklama')
                .setDescription('Etkinlik açıklaması')
                .setRequired(true)),
    async execute(interaction) {
        const tarih = interaction.options.getString('tarih');
        const baslik = interaction.options.getString('baslik');
        const aciklama = interaction.options.getString('aciklama');
        
        const id = eventId++;
        events.set(id, { tarih, baslik, aciklama });

        await interaction.reply(`Etkinlik eklendi (ID: ${id}). Tarih: "${tarih}", Başlık: "${baslik}", Açıklama: "${aciklama}"`);
    },
};

module.exports.events = events;