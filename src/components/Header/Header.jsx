import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/Frame 8.svg';
import telegram from '../../assets/img/logos_telegram.svg';
import whatsapp from '../../assets/img/logos_whatsapp-icon.svg';
import Modal from '../Modal/Modal';
import './Header.scss';

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Отслеживаем размер окна
    // В useEffect для блокировки скролла замените на:
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('menu-open');
            document.documentElement.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
            document.documentElement.classList.remove('menu-open');
        }

        return () => {
            document.body.classList.remove('menu-open');
            document.documentElement.classList.remove('menu-open');
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        console.log('Toggle menu clicked. Current state:', isMobileMenuOpen);
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        console.log('Closing mobile menu');
        setIsMobileMenuOpen(false);
    };

    // Блокировка скролла при открытом меню
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <Link to="/" className="header__logo" onClick={closeMobileMenu}>
                            <img src={logo} alt="ЛесПил" />
                        </Link>

                        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--active' : ''}`}>
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <Link to="/" className="nav__link" onClick={closeMobileMenu}>Главная</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/lumber" className="nav__link" onClick={closeMobileMenu}>Пиломатериалы</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/contacts" className="nav__link" onClick={closeMobileMenu}>Контакты</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="header__actions">
                            <div className="header__social">
                                <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
                                    <img src={telegram} alt="Telegram" className="social-icon" />
                                </a>
                                <a href="https://wa.me/79212351506" target="_blank" rel="noopener noreferrer">
                                    <img src={whatsapp} alt="WhatsApp" className="social-icon" />
                                </a>
                            </div>
                            <button
                                className="btn btn--primary header__call-btn"
                                onClick={() => {
                                    setIsModalOpen(true);
                                    closeMobileMenu();
                                }}
                            >
                                <span className="btn-text">📞 Заказать звонок</span>
                            </button>

                            {/* Бургер меню - УЛУЧШЕННАЯ ВЕРСИЯ */}
                            <button
                                className={`header__burger ${isMobileMenuOpen ? 'header__burger--active' : ''}`}
                                onClick={toggleMobileMenu}
                                aria-label="Открыть меню"
                                aria-expanded={isMobileMenuOpen}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Overlay для мобильного меню */}
            <div
                className={`header__overlay ${isMobileMenuOpen ? 'header__overlay--active' : ''}`}
                onClick={closeMobileMenu}
            ></div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default Header;