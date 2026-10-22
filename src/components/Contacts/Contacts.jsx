import React from 'react';
import './Contacts.scss';
import telegram from '../../assets/img/logos_telegram.svg';
import whatsapp from '../../assets/img/logos_whatsapp-icon.svg';
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="container">
                <h1 className="contacts__title">Свяжитесь с нами</h1>

                <div className="contacts__grid">
                    <div className="contact-info">
                        <h2>Контактная информация</h2>

                        <div className="contact-item">
                            <div className="contact-item__icon">📞</div>
                            <div className="contact-item__content">
                                <h3>Телефон</h3>
                                <a href="tel:+79212351506" className="contact-link">+7 (921) 235-15-06</a>
                                <p>Звоните с 7:00 до 22:00</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item__icon">💬</div>
                            <div className="contact-item__content">
                                <h3>Мессенджеры</h3>
                                <div className="contact-social">
                                    <a href="https://wa.me/79212351506" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <img src={whatsapp} alt="WhatsApp" />
                                        WhatsApp
                                    </a>
                                    <a href="https://t.me/your_telegram" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <img src={telegram} alt="Telegram" />
                                        Telegram
                                    </a>
                                </div>
                                <p>Отправляем фото товара, отвечаем на вопросы</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item__icon">📍</div>
                            <div className="contact-item__content">
                                <h3>Адрес</h3>
                                <p><strong>д. Верховино, Никольский район</strong></p>
                                <p>Самовывоз с пилорамы</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item__icon">⏰</div>
                            <div className="contact-item__content">
                                <h3>Режим работы</h3>
                                <p><strong>Ежедневно: 7:00 - 22:00</strong></p>
                                <p>Прием заказов и консультации</p>
                            </div>
                        </div>
                    </div>

                    <div className="map-section">
                        <h2>Как добраться</h2>
                        <div className="map-container">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=45.531242%2C56.328383&z=12&pt=45.531242,56.328383,pm2grl"
                                width="100%"
                                height="400"
                                frameBorder="0"
                                allowFullScreen={true}
                                title="Карта расположения пилорамы"
                                style={{ borderRadius: '15px' }}
                            ></iframe>
                            <div className="map-instructions">
                                <p>🚗 <strong>Схема проезда:</strong></p>
                                <ul>
                                    <li>Из г. Никольск по трассе Р-132</li>
                                    <li>Поворот на д. Верховино после моста</li>
                                    <li>Пилорама в 500 м от поворота</li>
                                    <li>Ориентир — склад пиломатериалов</li>
                                </ul>
                                <p className="note">Точные координаты: 56.328383, 45.531242</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="call-to-action">
                    <h2>Не нашли что искали?</h2>
                    <p>Нужен нестандартный размер или есть особые требования? Просто позвоните — обсудим!</p>
                    <a href="tel:+79212351506" className="btn btn--primary">Позвонить сейчас</a>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__section footer__contacts">
                            <h3>Контакты</h3>
                            <a href="tel:+79212351506" className="footer__phone">+7 (921) 235-15-06</a>
                            <p className="contact-item">
                                📍 д. Верховино, Никольский район
                            </p>
                            <p className="contact-item">
                                🕒 Ежедневно 7:00 - 22:00
                            </p>
                            <div className="footer__social">
                                <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
                                    <img className='social-icon' src={telegram} alt="Telegram" />
                                </a>
                                <a href="https://wa.me/79212351506" target="_blank" rel="noopener noreferrer">
                                    <img className='social-icon' src={whatsapp} alt="WhatsApp" />
                                </a>
                            </div>
                        </div>

                        <div className="footer__section footer__products">
                            <h3>Продукция</h3>
                            <ul>
                                <li><Link to="/lumber">Лес кругляк</Link></li>
                                <li><Link to="/lumber">Доска обрезная</Link></li>
                                <li><Link to="/lumber">Брус строительный</Link></li>
                                <li><Link to="/lumber">Вагонка</Link></li>
                                <li><Link to="/lumber">Баланс</Link></li>
                            </ul>
                        </div>

                        <div className="footer__section">
                            <h3>Реквизиты</h3>
                            <div className="footer__requisites">
                                <p><strong>ИП Шиловский Владимир Анатольевич</strong></p>
                                <p>ОГРНИП: 305353832600020</p>
                                <p>ИНН: 353001626741</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <div className="footer__copyright">
                            © 2024 Лес и пиломатериалы от производителя. Все права защищены.
                        </div>
                        <div className="footer__legal">
                            <Link to="/privacy-policy" className="footer__legal-link">Политика конфиденциальности</Link>
                            <Link to="/terms-of-use" className="footer__legal-link">Условия пользования</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Contacts;