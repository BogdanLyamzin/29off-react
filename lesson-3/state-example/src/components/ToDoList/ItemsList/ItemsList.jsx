import PropTypes from "prop-types";

import styles from "./ItemsList.module.css";

const ItemsList = ({items}) => {

    const elements = items.map(item => <li key={item.id} onClick={item.onDelete}
    className={item.important ? styles.itemImportant : styles.item}>
        {item.text} <span className={styles.delete}>X</span>
</li>);
    
    return (
        <ul className={styles.list}>
        {elements}
    </ul>
    )
}

export default ItemsList;

ItemsList.defaultProps = {
    items: []
}

ItemsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        important: PropTypes.bool.isRequired,
        onDelete: PropTypes.func.isRequired
    }))
}