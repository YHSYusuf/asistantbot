const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hakkinda')
        .setDescription('Botun işlevleri hakkında bilgi verir.'),
    async execute(interaction) {
        await interaction.reply(`
Bu bot, kullanıcıların günlük hatırlatmalar, notlar, etkinlikler ve görevler gibi çeşitli işlevleri yönetmelerine yardımcı olmak için tasarlanmıştır. Aşağıda botun sağladığı ana işlevler listelenmiştir:

- Hatırlatmalar ekleme, silme ve listeleme.
- Notlar ekleme, silme ve listeleme.
- Etkinlikler ekleme, silme ve listeleme.
- Günlük görevler ekleme, tamamlama, silme ve listeleme.
- Belirli bir şehir için hava durumu bilgisi gösterme.
- Komutun kullanıldığı andaki tarih ve saati etkileşimli olarak gösterme.
        `);
    },
};
