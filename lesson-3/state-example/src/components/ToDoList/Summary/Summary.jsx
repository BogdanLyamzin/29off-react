import PropTypes from "prop-types";

import styles from "./Summary.module.css";

const Summary = ({summary, importantSummary}) => {
    return (
        <div className={styles.summary}>
            <p className={styles.summaryText}>Всего дел: {summary}</p>
            <p className={styles.summaryText}>Важных: {importantSummary}</p>
        </div>
    )
}

export default Summary;

Summary.propTypes = {
    summary: PropTypes.number.isRequired,
    importantSummary: PropTypes.number.isRequired
}