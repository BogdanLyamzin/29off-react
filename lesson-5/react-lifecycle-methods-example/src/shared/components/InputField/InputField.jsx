import PropTypes from "prop-types";

import styles from "./InputField.module.css";

const InputField = (props) => {
    const {label, id, value, name, onChange, type, checked, placeholder, required} = props;
    return (
        <div className={styles.formGroup}>
            {label && <label className={styles.label} htmlFor={id}>{label}</label>}
            <input id={id} value={value} checked={checked} name={name} onChange={onChange} type={type} placeholder={placeholder} required={required} />
        </div>
    )
}

InputField.defaultProps = {
    type: "text",
    required: false
}

InputField.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool
}

export default InputField;