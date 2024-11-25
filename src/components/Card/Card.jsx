import styles from './Card.module.css';
import {Link} from "react-router";
import PropTypes, {string} from "prop-types";

const Card = ({card, id}) => {
    const image = card.IMAGEURL || "https://via.placeholder.com/300x200";

    return (
        <div className={styles.card}>
            <img src={image} alt="Сертификат 1" className={styles.card__image}/>
            <div className={styles.card__info}>
                <h3 className={styles.card__title}>{card.NAME}</h3>
                <p className={styles.card__description}>Цена: {card.SUMMA}</p>
                <Link to={`/${(id)}`} state={{certName: card.NAME,
                    certId: card.ID,
                    tableName: card.TABLENAME,
                    primaryKey: card.PRIMARYKEY,
                    price: card.PRICE,
                    summa: card.SUMMA}} className={styles.card__btn}>Оформить</Link>
            </div>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    card: PropTypes.shape({
            "ID": string,
            "TABLENAME": string,
            "PRIMARYKEY": string,
            "NAME": string,
            "DESCRIPTION": string,
            "PRICE": string,
            "SUMMA": string,
            "DISCOUNT": string,
            "IMAGEURL":string,
            "REC_SNO": string,
            "REC_NAME": string,
            "REC_SUM":string,
            "REC_QUANTITY": string,
            "REC_PAYMENT_METHOD": string,
            "REC_PAYMENT_OBJECT": string,
            "REC_TAX": string
        })
}

export default Card;