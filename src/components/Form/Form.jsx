import { useState } from 'react';
import styles from './Form.module.css';
import { Link, Navigate, useLocation } from "react-router-dom";
import axios from "axios";

const Form = () => {
    const location = useLocation();
    const { certName, certId, tableName, primaryKey, price, summa } = location.state;

    // Состояния для значений полей формы
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ name: '', phone: '', email: '' });
    const [isSuccess, setIsSuccess] = useState(false); // Состояние успеха

    const sendData = async () => {
        try {
            const response = await axios.post('https://sycret.ru/service/api/api', {
                "ApiKey": "011ba11bdcad4fa396660c2ec447ef14",
                "MethodName": "OSSale",
                "TableName": tableName,
                "PrimaryKey": primaryKey,
                "Price": price,
                "Summa": summa,
                "ClientName": name,
                "Phone": phone,
                "Email": email,
                "PaymentTypeId": 2,
                "UseDelivery": 0,
                "DeliveryAddress": 0,
                "IsGift": 0,
                "MsgText": null,
                "PName": null,
                "PPhone": null,
                "Data": {
                    CertNumber: certId
                }
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setIsSuccess(true); // Если отправка успешна, меняем состояние
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
            alert('Ошибка при отправке данных. Попробуйте снова.');
        }
    }


    // Если сертификат не передан, перенаправляем на главную
    if (!certName) {
        return <Navigate to="/" replace />;
    }

    // Валидация данных
    const validateForm = (e) => {
        e.preventDefault();

        let valid = true;
        let newErrors = { name: '', phone: '', email: '' };

        // Валидация имени
        if (!name) {
            valid = false;
            newErrors.name = 'Имя не может быть пустым';
        }

        // Валидация телефона
        const phonePattern = /^(\+7)?\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
        if (!phone || !phonePattern.test(phone)) {
            valid = false;
            newErrors.phone = 'Неверный формат телефона';
        }

        // Валидация email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || !emailPattern.test(email)) {
            valid = false;
            newErrors.email = 'Неверный формат почты';
        }

        // Обновляем состояние ошибок
        setErrors(newErrors);

        // Если форма валидна, можно отправить её
        if (valid) {
            sendData();
        }
    };

    // Если отправка данных успешна, перенаправляем
    if (isSuccess) {
        return <Navigate to="/success" replace />;
    }

    return (
        <section className={styles.formSection}>
            <form className={styles.form} id="certificateForm" onSubmit={validateForm}>
                <h2 className={styles.form__title}>Заполните данные для оформления</h2>

                <div className={styles.form__group}>
                    <label htmlFor="name" className={styles.form__label}>Имя:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={styles.form__input}
                        placeholder="Введите ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    {errors.name && <span className={styles.form__error}>{errors.name}</span>}
                </div>

                <div className={styles.form__group}>
                    <label htmlFor="phone" className={styles.form__label}>Телефон:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={styles.form__input}
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="^(\+7)?\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$"
                        required
                    />
                    {errors.phone && <span className={styles.form__error}>{errors.phone}</span>}
                </div>

                <div className={styles.form__group}>
                    <label htmlFor="email" className={styles.form__label}>Почта:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={styles.form__input}
                        placeholder="example@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && <span className={styles.form__error}>{errors.email}</span>}
                </div>

                <p>Оформляемый сертификат: <b>{certName}</b></p>

                <div className={styles.form__buttons}>
                    <Link to='/' className={styles.form__btn + ' ' + styles.form__btnBack}>Назад</Link>
                    <button type="submit" className={styles.form__btn + ' ' + styles.form__btnSubmit}>Оплатить</button>
                </div>
            </form>
        </section>
    );
};

export default Form;
