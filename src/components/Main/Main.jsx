import styles from './Main.module.css';
import axios from "axios";
import {config} from '../../config.js';
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards.jsx";

const Main = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Состояние для хранения ошибки

    const getCertsData = async () => {
        try {
            const response = await axios(`${config.URL}?ApiKey=${config.API_KEY}&MethodName=${config.OSGetGoodList}`);
            setCards(response.data.data); // Обновляем данные с сервера
            setLoading(false); // Завершаем загрузку
        } catch (err) {
            setError('Произошла ошибка при загрузке данных.'); // Если ошибка, сохраняем сообщение об ошибке
            setLoading(false); // Завершаем загрузку, даже если произошла ошибка
        }
    };

    useEffect(() => {
        getCertsData();
    }, []);

    // Если данные еще загружаются
    if (loading) {
        return <h1>Загрузка...</h1>;
    }

    // Если произошла ошибка
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <main className={styles.main}>
            <Cards cards={cards} />
        </main>
    );
};

export default Main;
