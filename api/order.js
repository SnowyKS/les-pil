// Vercel serverless function: принимает заявку с сайта и отправляет её в Telegram.
// Нужные переменные окружения (задаются в Vercel → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN — токен бота от @BotFather
//   TELEGRAM_CHAT_ID   — кому слать заявки; несколько получателей через запятую
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const { name = '', phone = '', email = '', message = '', productName = '' } = body;

  if (!String(name).trim() || !String(phone).trim()) {
    return res.status(400).json({ success: false, message: 'Пожалуйста, укажите имя и телефон.' });
  }

  const esc = (s) => String(s).slice(0, 1000)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const time = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });
  const text = [
    '🪵 <b>Новая заявка с сайта</b>',
    '',
    `👤 <b>Имя:</b> ${esc(name)}`,
    `📞 <b>Телефон:</b> ${esc(phone)}`,
    email ? `📧 <b>Email:</b> ${esc(email)}` : null,
    `📦 <b>Товар:</b> ${esc(productName || 'Общий запрос')}`,
    message ? `💬 <b>Сообщение:</b> ${esc(message)}` : null,
    `⏰ ${time}`,
  ].filter(Boolean).join('\n');

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = String(process.env.TELEGRAM_CHAT_ID || '').split(',').map((s) => s.trim()).filter(Boolean);

  try {
    if (!token || chatIds.length === 0) throw new Error('Не заданы TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID');
    const results = await Promise.all(chatIds.map(async (chat_id) => {
      const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id, text, parse_mode: 'HTML' }),
      });
      return r.json();
    }));
    if (!results.some((r) => r.ok)) throw new Error(results.map((r) => r.description).join('; '));

    return res.status(200).json({
      success: true,
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
    });
  } catch (err) {
    console.error('Ошибка отправки заявки:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Произошла ошибка. Пожалуйста, позвоните нам: +7 (921) 235-15-06.',
    });
  }
};
