const { SlashCommandBuilder } = require('discord.js');
const reminders = new Map();
let reminderId = 0;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hatirlatma-ekle')
        .setDescription('Belirtilen zamanda bir hatırlatıcı oluşturur.')
        .addStringOption(option =>
            option.setName('zaman')
                .setDescription('Hatırlatma zamanı (örnek: 10m, 1h)')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('mesaj')
                .setDescription('Hatırlatma mesajı')
                .setRequired(true)),
    async execute(interaction) {
        const zaman = interaction.options.getString('zaman');
        const mesaj = interaction.options.getString('mesaj');
        const timeInMs = parseTime(zaman);

        if (timeInMs === null) {
            await interaction.reply({ content: 'Geçersiz zaman formatı! Lütfen 10m, 1h gibi bir format kullanın.', ephemeral: true });
            return;
        }

        const id = reminderId++;
        reminders.set(id, {
            mesaj, timeout: setTimeout(() => {
                interaction.followUp(`Hatırlatma (${id}): ${mesaj}`);
                reminders.delete(id);
            }, timeInMs)
        });

        await interaction.reply(`Hatırlatma oluşturuldu (ID: ${id}). Mesaj: "${mesaj}", Zaman: ${zaman}`);
    },
};

function parseTime(timeStr) {
    const match = timeStr.match(/(\d+)([smhd])/);
    if (!match) return null;

    const num = parseInt(match[1]);
    const unit = match[2];

    switch (unit) {
        case 's': return num * 1000;
        case 'm': return num * 60 * 1000;
        case 'h': return num * 60 * 60 * 1000;
        case 'd': return num * 24 * 60 * 60 * 1000;
        default: return null;
    }
}

module.exports.reminders = reminders;