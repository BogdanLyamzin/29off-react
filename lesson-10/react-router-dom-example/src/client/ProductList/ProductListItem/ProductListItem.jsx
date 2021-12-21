import {memo} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import styles from "./ProductListItem.module.css";

const ProductListItem = ({id, title, description, price})=> {
    return (
        <Link to={`/products/${id}`} className={styles.link}>
            <li className={styles.card}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p> 
                <p className={styles.price}>{price}</p>
            </li>
        </Link>
    )
}

export default memo(ProductListItem);

ProductListItem.propTypes = {
    title: PropTypes.string.isRequired,
    title: PropTypes.string,
    title: PropTypes.string,
}