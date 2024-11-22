import styles from './Card.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <img src="https://via.placeholder.com/300x200" alt="Сертификат 1" className={styles.card__image}/>
            <div className={styles.card__info}>
                <h3 className={styles.card__title}>Сертификат на ужин</h3>
                <p className={styles.card__description}>Получите сертификат на ужин в ресторане на двоих.</p>
                <a href="certificate1.html" className={styles.card__btn}>Подробнее</a>
            </div>
        </div>
    )
}

export default Card;