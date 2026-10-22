import React from 'react';
import './TermsOfUse.scss';
import { Link } from 'react-router-dom';
import telegram from '../../assets/img/logos_telegram.svg';
import whatsapp from '../../assets/img/logos_whatsapp-icon.svg';

const TermsOfUse = () => {
    return (
        <>
            <div className="legal-page">
                <div className="container">
                    <div className="legal-page__header">
                        <h1>Условия пользования сайтом</h1>
                        <p className="legal-page__date">Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>
                    </div>

                    <div className="legal-page__content">
                        <section className="legal-section">
                            <h2>1. Общие положения</h2>
                            <p>
                                1.1. Настоящие Условия пользования (далее — «Условия») регулируют отношения между
                                ИП Шиловский Владимир Анатольевич (далее — «Продавец») и Пользователем (далее — «Покупатель»)
                                при использовании сайта и приобретении товаров.
                            </p>
                            <p>
                                1.2. Покупатель, осуществляя заказ на Сайте, подтверждает свое согласие с настоящими Условиями.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>2. Информация о товарах</h2>
                            <p>
                                2.1. Все описания товаров, изображения, технические характеристики и цены,
                                представленные на Сайте, носят исключительно информационный характер и не являются
                                публичной офертой.
                            </p>
                            <p>
                                2.2. Продавец оставляет за собой право изменять информацию о товарах, включая цены,
                                в любое время без предварительного уведомления.
                            </p>
                            <p>
                                2.3. Фотографии товаров могут отличаться от реального внешнего вида.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>3. Порядок оформления заказа</h2>
                            <div className="legal-list">
                                <h3>3.1. Заказ товара осуществляется следующим образом:</h3>
                                <ul>
                                    <li>Покупатель выбирает интересующий товар</li>
                                    <li>Связывается с Продавцом по телефону или через мессенджеры</li>
                                    <li>Уточняет наличие, стоимость и условия доставки</li>
                                    <li>Подтверждает заказ</li>
                                </ul>
                            </div>
                            <p>
                                3.2. После подтверждения заказа Покупатель получает информацию о сроках поставки
                                и окончательной стоимости заказа.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>4. Доставка и самовывоз</h2>
                            <div className="legal-list">
                                <h3>4.1. Доставка осуществляется следующими способами:</h3>
                                <ul>
                                    <li>Самовывоз со склада в д. Верховино, Никольский район</li>
                                    <li>Доставка транспортом Продавца по Никольскому району</li>
                                    <li>Доставка транспортными компаниями в другие регионы</li>
                                </ul>
                            </div>
                            <p>
                                4.2. Стоимость и сроки доставки согласовываются индивидуально с каждым Покупателем.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>5. Оплата товаров</h2>
                            <div className="legal-list">
                                <h3>5.1. Оплата товаров осуществляется следующими способами:</h3>
                                <ul>
                                    <li>Наличными при получении товара</li>
                                    <li>Банковским переводом по счету</li>
                                    <li>Через онлайн-банкинг</li>
                                </ul>
                            </div>
                            <p>
                                5.2. Окончательный расчет производится после согласования всех деталей заказа.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>6. Качество товаров и возврат</h2>
                            <p>
                                6.1. Продавец гарантирует соответствие товаров заявленным характеристикам.
                            </p>
                            <p>
                                6.2. Пиломатериалы являются натуральным продуктом и могут иметь естественные
                                особенности древесины (сучки, изменение цвета и т.д.).
                            </p>
                            <p>
                                6.3. Возврат товара возможен в случае несоответствия качества заявленному.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>7. Интеллектуальная собственность</h2>
                            <p>
                                7.1. Все материалы, размещенные на Сайте (тексты, изображения, дизайн, логотипы),
                                являются интеллектуальной собственностью Продавца и защищены законодательством РФ.
                            </p>
                            <p>
                                7.2. Любое копирование, воспроизведение или распространение материалов Сайта
                                без письменного разрешения Продавца запрещено.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>8. Ответственность</h2>
                            <p>
                                8.1. Продавец не несет ответственности за убытки, возникшие в результате
                                неправильного использования товаров Покупателем.
                            </p>
                            <p>
                                8.2. Продавец не несет ответственности за задержки в доставке, вызванные
                                обстоятельствами непреодолимой силы.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>9. Изменение условий</h2>
                            <p>
                                9.1. Продавец оставляет за собой право вносить изменения в настоящие Условия
                                в любое время без предварительного уведомления Покупателя.
                            </p>
                            <p>
                                9.2. Новая редакция Условий вступает в силу с момента ее размещения на Сайте.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>10. Информация о товаре</h2>
                            <p>В соответствии со ст. 10 Закона о защите прав потребителей сообщаем:</p>
                            <ul>
                                <p>10.1. Все пиломатериалы соответствуют заявленным характеристикам</p>
                                <p> 10.2. Фотографии товаров могут отличаться от реального вида</p>
                                <p> 10.3. Цены указаны с учетом НДС (ИП применяет УСН)</p>
                                <p> 10.4. Сроки поставки согласовываются индивидуально</p>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>11. Контактная информация</h2>
                            <div className="contact-info">
                                <p><strong>ИП Шиловский Владимир Анатольевич</strong></p>
                                <p><strong>Телефон:</strong> +7 (921) 235-15-06</p>
                                <p><strong>Адрес:</strong> д. Верховино, Никольский район</p>
                                <p><strong>ОГРНИП:</strong> 305353832600020</p>
                                <p><strong>ИНН:</strong> 353001626741</p>
                            </div>
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
        </>
    );
};

export default TermsOfUse;