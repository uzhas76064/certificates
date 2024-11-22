import PropTypes from "prop-types";
import styles from  "./Header.module.css";

const Header = ({title}) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>{title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;