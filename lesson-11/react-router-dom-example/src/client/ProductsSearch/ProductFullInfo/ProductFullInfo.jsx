import PropTypes from "prop-types";

import styles from "./ProductFullInfo.module.css";

const ProductFullInfo = (props)=> {
    const {title, type, description, height, weight, price} = props;
    return (
        <div>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{type}</p> 
            <p className={styles.text}>{description}</p> 
            <p className={styles.text}>{height}</p>
            <p className={styles.text}>{weight}</p>
            <p className={styles.text}>{price}</p>
        </div>
    )
}

export default ProductFullInfo;

ProductFullInfo.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    description: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number,
    price: PropTypes.number,
}