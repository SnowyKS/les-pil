import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Modal.scss';

const Modal = ({ isOpen, onClose, productName = '' }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        agree: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.agree) {
            alert('Пожалуйста, согласитесь с политикой конфиденциальности и условиями пользования');
            return;
        }

        setIsSubmitting(true);

        try {
            // Отправляем данные на наш сервер
            const response = await fetch('/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.message,
                    productName: productName
                })
            });

            const result = await response.json();

            if (result.success) {
                alert(`✅ ${result.message}\n\nСпасибо, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
                onClose();
                setFormData({ name: '', phone: '', email: '', message: '', agree: false });
            } else {
                alert(`❌ ${result.message}`);
            }
        } catch (error) {
            console.error('Ошибка при отправке:', error);
            alert('❌ Не удалось отправить заявку. Пожалуйста, позвоните нам по телефону +7 (921) 235-15-06');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal__close" onClick={onClose}>×</button>

                <div className="modal__header">
                    <h2>Заказать звонок</h2>
                    {productName && <p>Товар: <strong>{productName}</strong></p>}
                </div>

                <form className="modal__form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Имя *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Введите ваше имя"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Номер телефона *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="+7 (900) 123-45-67"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Сообщение</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Дополнительная информация..."
                            rows="3"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group form-group--checkbox">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleInputChange}
                                required
                                disabled={isSubmitting}
                            />
                            <span className="checkmark"></span>
                            <span className="checkbox-text">
                                Я соглашаюсь с{' '}
                                <Link to="/privacy-policy" target="_blank" onClick={(e) => e.stopPropagation()}>
                                    политикой конфиденциальности
                                </Link>{' '}
                                и{' '}
                                <Link to="/terms-of-use" target="_blank" onClick={(e) => e.stopPropagation()}>
                                    условиями пользования
                                </Link>
                                *
                            </span>
                        </label>
                        <div className="form-notice">
                            <p className='form-notice__text'>Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                                и подтверждаете ознакомление с документами</p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn--primary"
                        disabled={!formData.agree || isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="loading-spinner"></span>
                                Отправка...
                            </>
                        ) : (
                            '📞 Заказать звонок'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;