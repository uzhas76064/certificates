import styles from './Main.module.css'
import axios from "axios";
import {useEffect, useState} from "react";
import Cards from "../Cards/Cards.jsx";

const Main = () => {
    const [cards, setCards] = useState([]);


    const getCertsData = async () => {
        const response = await axios('https://sycret.ru/service/api/api?ApiKey=011ba11bdcad4fa396660c2ec447ef14&MethodName=OSGetGoodList');

        setCards(response.data.data);
    }

    useEffect(() => {
        getCertsData();
    }, [])
    console.log(cards)

    return (
        <main className={styles.main}>
            <Cards cards={cards}/>
        </main>
    )
}

export default Main;