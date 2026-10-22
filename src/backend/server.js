import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


const auth = new google.auth.GoogleAuth({
    keyFile: './credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });


const SPREADSHEET_ID = '1B39WaGn5YpEt4BoS81UJagzJjphno8wUXQ_RCEJidTk';


app.get('/api/test', (req, res) => {
    res.json({ 
        success: true, 
        message: 'Сервер работает отлично! 🚀',
        timestamp: new Date().toLocaleString('ru-RU')
    });
});


app.post('/api/order', async (req, res) => {
    try {
        const { name, phone, email, message, productName } = req.body;

        console.log(' ');
        console.log('📨 ===== НОВАЯ ЗАЯВКА =====');
        console.log('👤 Имя:', name || 'Не указано');
        console.log('📞 Телефон:', phone || 'Не указано');
        console.log('📧 Email:', email || 'Не указан');
        console.log('🪵 Товар:', productName || 'Общий запрос');
        console.log('💬 Сообщение:', message || 'Не указано');
        console.log('⏰ Время:', new Date().toLocaleString('ru-RU'));
        console.log('📨 ========================');

        
        console.log('🔄 Пытаемся сохранить в Google Sheets...');
        await saveToGoogleSheets({
            name,
            phone,
            email,
            message,
            productName
        });

        console.log('✅ Заявка сохранена в Google Sheets');

        res.json({
            success: true,
            message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
        });

    } catch (error) {
        console.error('❌ Ошибка при сохранении в Google Sheets:', error);
        console.error('📋 Детали ошибки:', error.message);
        
        res.json({
            success: false,
            message: 'Произошла ошибка. Пожалуйста, позвоните нам по телефону.'
        });
    }
});


async function saveToGoogleSheets(data) {
    try {
        const timestamp = new Date().toLocaleString('ru-RU', {
            timeZone: 'Europe/Moscow'
        });

        const rowData = [
            timestamp,
            data.name || '',
            data.phone || '',
            data.email || '',
            data.productName || '',
            data.message || '',
            'Новая'
        ];

        console.log('📊 Данные для записи:', rowData);
        console.log('🆔 ID таблицы:', SPREADSHEET_ID);

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'A:G', 
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            resource: {
                values: [rowData]
            }
        });

        console.log('✅ Успешно записано в Google Sheets');
        console.log('📈 Ответ от Google:', response.data);
        
    } catch (error) {
        console.error('❌ Ошибка при записи в Google Sheets:');
        console.error('💬 Сообщение:', error.message);
        console.error('🔧 Код ошибки:', error.code);
        console.error('📋 Детали:', error.response?.data);
        throw error;
    }
}

app.listen(PORT, () => {
    console.log('🚀 Сервер запущен!');
    console.log(`📍 Порт: ${PORT}`);
    console.log(`🌐 Тест: http://localhost:${PORT}/api/test`);
    console.log('📊 Google Sheets подключен');
    console.log('📞 Готов принимать заявки...');
    console.log(' ');
});