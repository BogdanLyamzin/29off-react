import PropTypes from "prop-types";

import styles from "./ProductSearchItem.module.css";

const ProductSearchItem = ({title, description, price, onClick})=> {
    return (
        <li className={styles.card} onClick={onClick}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p> 
            <p className={styles.price}>{price}</p>
        </li>
    )
}

export default ProductSearchItem;

ProductSearchItem.propTypes = {
    title: PropTypes.string.isRequired,
    title: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func
}