# Настройка заявок «Лес Пил» в Telegram: проверяет токен бота, находит chat ID,
# шлёт тестовое сообщение и записывает TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID в Vercel (production).
# Запуск из папки my-app:  powershell -ExecutionPolicy Bypass -File scripts\setup-telegram.ps1
[Console]::OutputEncoding = [Text.Encoding]::UTF8
$ErrorActionPreference = 'Stop'
Set-Location (Split-Path -Parent $PSScriptRoot)

$secure = Read-Host 'Вставь токен бота от @BotFather (символы не отображаются)' -AsSecureString
$token = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)).Trim()
$api = "https://api.telegram.org/bot$token"

try { $me = Invoke-RestMethod "$api/getMe" } catch { Write-Host 'Токен не подошёл — проверь, что скопировал его целиком.' -ForegroundColor Red; exit 1 }
Write-Host "Бот найден: @$($me.result.username)" -ForegroundColor Green

Write-Host ''
Write-Host "1) Открой в Telegram https://t.me/$($me.result.username) с аккаунта, куда должны приходить заявки"
Write-Host '2) Нажми «Запустить» (/start) или напиши боту любое сообщение'
Read-Host '3) Потом нажми Enter здесь'

$updates = (Invoke-RestMethod "$api/getUpdates").result
$chats = @($updates | ForEach-Object { if ($_.message) { $_.message.chat } elseif ($_.my_chat_member) { $_.my_chat_member.chat } } |
    Where-Object { $_ } | Sort-Object id -Unique)
if ($chats.Count -eq 0) { Write-Host 'Бот не видит сообщений. Напиши ему /start и запусти скрипт заново.' -ForegroundColor Red; exit 1 }

for ($i = 0; $i -lt $chats.Count; $i++) {
    $c = $chats[$i]
    Write-Host ("[{0}] {1} {2} @{3} (id {4})" -f ($i + 1), $c.first_name, $c.last_name, $c.username, $c.id)
}
$pick = 1
if ($chats.Count -gt 1) { $pick = [int](Read-Host 'Номер чата, куда слать заявки') }
$chatId = [string]$chats[$pick - 1].id

$body = @{ chat_id = $chatId; text = '✅ Бот подключён. Сюда будут приходить заявки с сайта les-pil.vercel.app' } | ConvertTo-Json
Invoke-RestMethod "$api/sendMessage" -Method Post -ContentType 'application/json; charset=utf-8' -Body ([Text.Encoding]::UTF8.GetBytes($body)) | Out-Null
Write-Host 'Тестовое сообщение отправлено — проверь Telegram.' -ForegroundColor Green

# Vercel CLI пишет служебный вывод в stderr — в PowerShell 5.1 со 'Stop' это валит скрипт
$ErrorActionPreference = 'Continue'
foreach ($pair in @(@('TELEGRAM_BOT_TOKEN', $token), @('TELEGRAM_CHAT_ID', $chatId))) {
    vercel env rm $pair[0] production --yes 2>$null | Out-Null
    $pair[1] | vercel env add $pair[0] production 2>&1 | Out-Null
}
$list = vercel env ls production 2>&1 | Out-String
if ($list -match 'TELEGRAM_BOT_TOKEN' -and $list -match 'TELEGRAM_CHAT_ID') {
    Write-Host 'Переменные записаны в Vercel. Напиши Claude «готово» — он передеплоит сайт.' -ForegroundColor Green
} else {
    Write-Host 'Не получилось записать в Vercel автоматически. Добавь вручную: Vercel → les-pil → Settings → Environment Variables' -ForegroundColor Yellow
    Write-Host "TELEGRAM_BOT_TOKEN = (твой токен), TELEGRAM_CHAT_ID = $chatId"
}
