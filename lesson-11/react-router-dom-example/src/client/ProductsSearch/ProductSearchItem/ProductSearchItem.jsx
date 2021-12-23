import {memo} from "react";
import PropTypes from "prop-types";
import {Link, useLocation} from "react-router-dom";

import styles from "./ProductSearchItem.module.css";

const ProductSearchItem = ({id, title, description, price, onClick})=> {
    const location = useLocation()
    return (
        <Link to={{
            pathname: `/products/${id}`,
            state: {
                from: location
            }
        }} className={styles.link}>
            <li className={styles.card}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p> 
                <p className={styles.price}>{price}</p>
            </li>
        </Link>
    )
}
const memorizeComponent = memo(ProductSearchItem);
export default memorizeComponent;

ProductSearchItem.propTypes = {
    title: PropTypes.string.isRequired,
    title: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func
}