import {memo} from "react";
import PropTypes from "prop-types";

import styles from "./ProductSearchItem.module.css";

const ProductSearchItem = ({id, title, description, price, onClick})=> {

    return (
        <li className={styles.card} onClick={()=> onClick(id)}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p> 
            <p className={styles.price}>{price}</p>
        </li>
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