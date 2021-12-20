import {memo} from "react";
import PropTypes from "prop-types";

import styles from "./ProductListItem.module.css";

const ProductListItem = ({title, description, price})=> {
    return (
        <li className={styles.card}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p> 
            <p className={styles.price}>{price}</p>
        </li>
    )
}

export default memo(ProductListItem);

ProductListItem.propTypes = {
    title: PropTypes.string.isRequired,
    title: PropTypes.string,
    title: PropTypes.string,
}