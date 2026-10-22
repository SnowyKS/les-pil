import React, { useState } from 'react';
import './Lumber.scss';
import vagonka from '../../assets/img/vagonka.jpg';
import balans from '../../assets/img/balans.jpg';
import sort12 from '../../assets/img/sort12.jpg'
import telegram from '../../assets/img/logos_telegram.svg';
import whatsapp from '../../assets/img/logos_whatsapp-icon.svg';
import backgr3 from '../../assets/img/backgr3.jpg';
import brus1 from '../../assets/img/brus1.jpg'
import sort23 from '../../assets/img/sort23.jpg';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

const Lumber = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');
    const handleOrderClick = (productName) => {
        setSelectedProduct(productName);
        setIsModalOpen(true);
    };
    return (
        <>
            <div className="lumber">
                <div className="container">
                    <h1 className="lumber__title">Наша продукция</h1>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-card__image">
                                <img src={backgr3} alt="Лес кругляк" />
                            </div>
                            <div className="product-card__content">
                                <h3>Лес кругляк</h3>
                                <div className="product-card__specs">
                                    <div className="spec">
                                        <span className="spec__label">Породы:</span>
                                        <span className="spec__value">Сосна, Ель</span>
                                    </div>
                                    <div className="spec">
                                        <span className="spec__label">Диаметр:</span>
                                        <span className="spec__value">от 14 см до 40 см</span>
                                    </div>
                                    <div className="spec">
                                        <span className="spec__label">Назначение:</span>
                                        <span className="spec__value">строительство, распил, дрова</span>
                                    </div>
                                </div>
                                <div className="product-card__footer">
                                    <div className="product-card__price">от 1500 руб/м³</div>
                                    <button className="btn btn--order" onClick={() => handleOrderClick('Лес кругляк')}>
                                        📞 Заказать
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-card__image">
                                <img src={brus1} alt="Брус" />
                            </div>
                            <div className="product-card__content">
                                <h3>Брус</h3>
                                <div className="product-card__specs">
                                    <div className="spec">
                                        <span className="spec__label">Размеры:</span>
                                        <span className="spec__value">100x100, 150x150, 100x150, 200x150, 200x200мм</span>
                                    </div>
                                    <div className="spec">
                                        <span className="spec__label">Длина:</span>
                                        <span className="spec__value">6 метров (возможны другие размеры)</span>
                                    </div>
                                </div>
                                <div className="product-card__footer">
                                    <div className="product-card__price">от 11 000 руб/м³</div>
                                    <button className="btn btn--order" onClick={() => handleOrderClick('Брус')}>
                                        📞 Заказать
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-card__image">
                                <img src={vagonka} alt="Вагонка" />
                            </div>
                            <div className="product-card__content">
                                <h3>Вагонка</h3>
                                <div className="product-card__specs">
                                    <div className="spec">
                                        <span className="spec__label">Породы:</span>
                                        <span className="spec__value">Сосна, Ель</span>
                                    </div>
                                    <div className="spec">
                                        <span className="spec__label">Размеры:</span>
                                        <span className="spec__value">стандартные и под заказ</span>
                                    </div>
                                    <div className="spec">
                                        <span className="spec__label">Назначение:</span>
                                        <span className="spec__value">внутренняя и внешняя отделка</span>
                                    </div>
                                </div>
                                <div className="product-card__footer">
                                    <div className="product-card__price">от 15 000 руб/м³</div>
                                    <button className="btn btn--order" onClick={() => handleOrderClick('Вагонка')}>
                                        📞 Заказать
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-card__image">
                                <img src={balans} alt="Баланс" />
                            </div>
                            <div className="product-card__content">
                                <h3>Баланс</h3>
                                <div className="product-card__specs">
                                    <div className="spec">
                                        <span className="spec__label">Породы:</span>
                                        <span className="spec__value">Сосна, Ель</span>
                                    </div>
                                    <div className="spec">
                                        <span className="spec__label">Диаметр:</span>
                                        <span className="spec__value">от 8 см до 24 см</span>
                                    </div>
                                    <div className="spec">
                                        <span className="spec__label">Назначение:</span>
                                        <span className="spec__value">целлюлозно-бумажное производство</span>
                                    </div>
                                </div>
                                <div className="product-card__footer">
                                    <div className="product-card__price">от 800 руб/м³</div>
                                    <button className="btn btn--order" onClick={() => handleOrderClick('Баланс')}>
                                        📞 Заказать
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="board-section">
                        <h2 className="board-section__title">Доска обрезная</h2>
                        <div className="board-qualities">
                            <div className="board-quality">
                                <div className="board-quality__image">
                                    <img src={sort12} alt="Доска 1 сорт" />
                                </div>
                                <div className="board-quality__content">
                                    <h3>1 сорт</h3>
                                    <p>Ровная, без сучков и дефектов. Для чистовых работ.</p>
                                    <div className="board-quality__price">от 12 000 руб/м³</div>
                                    <button className="btn btn--order" onClick={() => handleOrderClick('Доска обрезная')}>
                                        📞 Заказать
                                    </button>
                                </div>
                            </div>

                            <div className="board-quality">
                                <div className="board-quality__image">
                                    <img src={sort23} alt="Доска 2 сорт" />
                                </div>
                                <div className="board-quality__content">
                                    <h3>2 сорт</h3>
                                    <p>Небольшие сучки. Для черновых работ, обрешетки.</p>
                                    <div className="board-quality__price">от 9 000 руб/м³</div>
                                    <button className="btn btn--order" onClick={() => handleOrderClick('Доска 2 сорт')}>
                                        📞 Заказать
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="board-sizes">
                            <p><strong>Типовые размеры:</strong> 25x150, 50x150, 25x100, 50x100 мм</p>
                        </div>
                    </section>

                    <div className="lumber-notice">
                        <p>💡 <strong>Все цены ориентировочные!</strong> Точную стоимость уточняйте по телефону.
                            Зависит от объема, качества древесины и сезона.</p>
                    </div>
                    <div className="lumber-notice">
                        <p>💡<strong>Внимание:</strong> Внешний вид пиломатериалов может <strong>незначительно</strong> отличаться от изображений.
                            Точные характеристики уточняйте у продавца.</p>
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
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={selectedProduct}
            />
        </>
    );
}

export default Lumber;