import styles from  './Cards.module.css';
import Card from "../Card/Card.jsx";
import PropTypes from "prop-types";

const Cards = ({cards}) => {
    return (
        <section className={styles.cards}>
            {cards.map((card) => (
                <Card key={card.ID} card={card} id={card.ID}/>
            ))}
        </section>
    )
}

Cards.propTypes = {
    cards: PropTypes.array,
}

export default Cards;