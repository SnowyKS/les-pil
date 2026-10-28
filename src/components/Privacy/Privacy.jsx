import React from 'react';
import './Privacy.scss';
import { Link } from 'react-router-dom';
import telegram from '../../assets/img/logos_telegram.svg';
import whatsapp from '../../assets/img/logos_whatsapp-icon.svg';

const PrivacyPolicy = () => {
    return (
        <>
        <div className="legal-page">
            <div className="container">
                <div className="legal-page__header">
                    <h1>Политика конфиденциальности</h1>
                    <p className="legal-page__date">Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>
                </div>

                <div className="legal-page__content">
                    <section className="legal-section">
                        <h2>1. Общие положения</h2>
                        <p>
                            Настоящая Политика конфиденциальности персональных данных (далее — Политика конфиденциальности) 
                            действует в отношении всей информации, которую сайт <strong>"Лес и пиломатериалы от производителя"</strong>, 
                            расположенный на доменном имени, может получить о Пользователе во время использования сайта.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Персональные данные Пользователей, которые обрабатываются</h2>
                        <div className="legal-list">
                            <h3>2.1. Мы обрабатываем следующие персональные данные:</h3>
                            <ul>
                                <li>Фамилия, имя, отчество</li>
                                <li>Номер телефона</li>
                                <li>Адрес электронной почты</li>
                                <li>Адрес доставки</li>
                                <li>Реквизиты компании (для юридических лиц)</li>
                            </ul>
                        </div>
                    </section>

                    <section className="legal-section">
                        <h2>3. Цели сбора и обработки персональных данных</h2>
                        <div className="legal-list">
                            <h3>3.1. Персональные данные Пользователя мы обрабатываем в следующих целях:</h3>
                            <ul>
                                <li>Обработка заказов и запросов</li>
                                <li>Связь с Пользователем по телефону или электронной почте</li>
                                <li>Организация доставки товаров</li>
                                <li>Предоставление информации об акциях и специальных предложениях</li>
                                <li>Улучшение качества обслуживания</li>
                            </ul>
                        </div>
                    </section>

                    <section className="legal-section">
                        <h2>4. Условия обработки персональных данных</h2>
                        <p>
                            4.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, 
                            любым законным способом, в том числе в информационных системах персональных данных 
                            с использованием средств автоматизации или без использования таких средств.
                        </p>
                        <p>
                            4.2. Пользователь соглашается с тем, что Администрация сайта вправе передавать 
                            персональные данные третьим лицам, в частности, курьерским службам, организациями 
                            почтовой связи, операторам электросвязи, исключительно для целей выполнения заказа Пользователя.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Меры, применяемые для защиты персональных данных Пользователей</h2>
                        <p>
                            Мы принимаем необходимые и достаточные организационные и технические меры для защиты 
                            персональных данных Пользователя от неправомерного или случайного доступа, уничтожения, 
                            изменения, блокирования, копирования, распространения, а также от иных неправомерных 
                            действий с ней третьих лиц.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>6. Изменение Политики конфиденциальности. Применимое законодательство</h2>
                        <p>
                            6.1. Мы имеем право вносить изменения в настоящую Политику конфиденциальности. 
                            При внесении изменений в актуальной редакции указывается дата последнего обновления. 
                            Новая редакция Политики вступает в силу с момента ее размещения, если иное не предусмотрено 
                            новой редакцией Политики.
                        </p>
                        <p>
                            6.2. К настоящей Политике и отношениям между Пользователем и Администрацией сайта, 
                            возникающим в связи с применением Политики конфиденциальности, подлежит применению 
                            право Российской Федерации.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>7. Обратная связь. Вопросы и предложения</h2>
                        <p>
                            Все предложения или вопросы по поводу настоящей Политики следует сообщать по телефону: 
                            <strong> +7 (921) 235-15-06</strong> или по электронной почте: <strong>silovskijegor237@gmail.com</strong>
                        </p>
                    </section>
                </div>
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
                                <a href="https://t.me/Egorighrr" target="_blank" rel="noopener noreferrer">
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
                            © {new Date().getFullYear()} Лес и пиломатериалы от производителя. Все права защищены.
                        </div>
                        <div className="footer__legal">
                            <Link to="/privacy-policy" className="footer__legal-link">Политика конфиденциальности</Link>
                            <Link to="/terms-of-use" className="footer__legal-link">Условия пользования</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default PrivacyPolicy;