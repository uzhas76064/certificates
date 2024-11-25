import PropTypes from "prop-types";
import styles  from './Footer.module.css';

const Footer = ({title, year}) => (
    <footer className={styles.footer}>
        <p className={styles.footer__text}>&copy; {year} {title}</p>
    </footer>
)

Footer.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}

export default Footer;