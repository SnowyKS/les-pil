import React, { useEffect, useState } from 'react';
import './Home.scss';
import icon from '../../assets/img/businessman.svg'
import price from '../../assets/img/price.svg'
import wood from '../../assets/img/wood.svg'
import auto from '../../assets/img/auto.svg'
import backgr1 from '../../assets/img/backgr1.jpg';
import backgr2 from '../../assets/img/backgr2.jpg';
import backgr3 from '../../assets/img/backgr3.jpg';
import roundWood from '../../assets/img/krugl.webp'
import board from '../../assets/img/sort2.jpg'
import timber from '../../assets/img/brus.jpg'
import telegram from '../../assets/img/logos_telegram.svg';
import whatsapp from '../../assets/img/logos_whatsapp-icon.svg';
import woodIcon from '../../assets/img/wood-icon.svg'

import les from '../../assets/img/les.jpg'
import brus1 from '../../assets/img/brus1.jpg'
import otpravka1 from '../../assets/img/otpravka1.jpg'
import balans from '../../assets/img/balans.jpg'
import krugl1 from '../../assets/img/krugl1.jpg'
import balansOtpravka from '../../assets/img/balans_otpravka.jpg'
import sort12 from '../../assets/img/sort12.jpg'
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';


const Home = () => {
    const [currentBackground, setCurrentBackground] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const backgroundImages = [backgr1, backgr2, backgr3];

    const galleryImages = [
        les, backgr2, backgr3,
        balans, otpravka1, brus1,
        krugl1, balansOtpravka, sort12
    ];
    // Подписи для поиска по картинкам и экранных дикторов — в том же порядке, что и фото
    const galleryAlts = [
        'Лес на пилораме в д. Верховино', 'Штабель бруса на складе пилорамы', 'Лес кругляк в штабеле',
        'Баланс на складе', 'Отгрузка пиломатериалов покупателю', 'Брус естественной влажности',
        'Лес кругляк на пилораме', 'Отгрузка баланса', 'Доска обрезная'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');

    const handleOrderClick = (productName) => {
        setSelectedProduct(productName);
        setIsModalOpen(true);
    };

    return (
        <div className="home">
            <section
                className="hero"
                style={{
                    backgroundImage: `url(${backgroundImages[currentBackground]})`
                }}
            >
                <div className="container">
                    <div className="hero__content">
                        <h1 className="hero__title">Лес и пиломатериалы от производителя</h1>
                        <p className="hero__subtitle">Качественные пиломатериалы по ценам от производителя с доставкой и самовывозом</p>
                        <div className="hero__actions">
                            <div className="products-preview__button">
                                <Link to="/lumber" className="btn btn--primary">Все пиломатериалы</Link>
                            </div>
                            <div className="hero__info">
                                <div className="hero__contact">
                                    <a href="tel:+79212351506" className="hero__phone">+7 (921) 235-15-06</a>
                                </div>
                                <p className="hero__location">📍 д. Верховино, Никольский район</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero__indicators">
                    {backgroundImages.map((_, index) => (
                        <button
                            key={index}
                            className={`hero__indicator ${index === currentBackground ? 'active' : ''}`}
                            onClick={() => setCurrentBackground(index)}
                        />
                    ))}
                </div>
            </section>

            <section className="advantages">
                <div className="container__adv">
                    <h2 className="advantages__title">
                        Почему<br />
                        <span className="advantages__subline">нас выбирают</span>
                    </h2>
                    <div className="advantage-group">
                        <div className="advantage">
                            <div className="advantage__content">
                                <img className='advantage__icon' src={icon} alt="" />
                                <div className="advantage__text">
                                    <h3>Прямой производитель</h3>
                                    <p>Самостоятельно заготавливаем лес и производим пиломатериалы</p>
                                </div>
                            </div>
                        </div>
                        <div className="advantage">
                            <div className="advantage__content">
                                <img className='advantage__icon' src={price} alt="" />
                                <div className="advantage__text">
                                    <h3>Цены от производителя</h3>
                                    <p>Работаем без посредников, поэтому цены ниже рыночных</p>
                                </div>
                            </div>
                        </div>
                        <div className="advantage advantage--large">
                            <div className="advantage__content">
                                <img className='advantage__icon' src={wood} alt="" />
                                <div className="advantage__text">
                                    <h3>Свежая древесина</h3>
                                    <p>Постоянно обновляем запасы, работаем с зимним лесом</p>
                                </div>
                            </div>
                        </div>
                        <div className="advantage advantage--double">
                            <div className="advantage__content">
                                <img className='advantage__icon' src={auto} alt="" />
                                <div className="advantage__text">
                                    <h3>Доставка</h3>
                                    <p>Организуем доставку по району или самовывоз</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products-preview">
                <div className="container">
                    <h2 className="products-preview__title">Основная продукция</h2>
                    <div className="products__grid">
                        <div className="product-card">
                            <div className="product-card__image">
                                <img src={roundWood} alt="Лес кругляк" />
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
                                <img src={board} alt="Доска обрезная" />
                            </div>
                            <div className="product-card__content">
                                <h3>Доска обрезная</h3>
                                <div className="product-card__quality">
                                    <span className="quality-badge">1 сорт</span>
                                    <p>Небольшие сучки. Для черновых работ, обрешетки.</p>
                                </div>
                                <div className="product-card__footer">
                                    <div className="product-card__price">от 9 000 руб/м³</div>
                                    <button className="btn btn--order" onClick={() => handleOrderClick('Доска обрезная')}>
                                        📞 Заказать
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-card__image">
                                <img src={timber} alt="Брус" />
                            </div>
                            <div className="product-card__content">
                                <h3>Брус</h3>
                                <div className="product-card__specs">
                                    <div className="spec">
                                        <span className="spec__label">Размеры:</span>
                                        <span className="spec__value">100x100, 150x150, 100x150 мм</span>
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
                    </div>
                    <Link to="/lumber" className="btn btn--assortment">
                        <img className='woodIcon' src={woodIcon} alt="" /> Ассортимент
                    </Link>
                </div>
            </section>

            <section className="gallery">
                <div className="container">
                    <h2 className="gallery__title">Наше производство</h2>
                    <p className="gallery__subtitle">Убедитесь в качестве нашего производства и материалов</p>
                    <div className="gallery__grid">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="gallery__item"
                                onClick={() => openModal(image)}
                            >
                                <img
                                    src={image}
                                    alt={galleryAlts[index]}
                                    loading="lazy"
                                    className="gallery__image"
                                />
                                <div className="gallery__overlay">
                                    <span className="gallery__zoom">🔍</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedImage && (
                    <div className="gallery__modal" onClick={closeModal}>
                        <div className="gallery__modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="gallery__modal-close" onClick={closeModal}>×</button>
                            <img src={selectedImage} alt="Увеличенное фото" className="gallery__modal-image" />
                        </div>
                    </div>
                )}
            </section>
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
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={selectedProduct}
            />
        </div>


    );
}

export default Home;