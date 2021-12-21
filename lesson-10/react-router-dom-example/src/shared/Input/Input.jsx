import { useEffect, useRef } from "react";

const Input = ({name, value, placeholder, type, onChange, required})=> {
    const inputRef = useRef(null);
    useEffect(()=> {
        inputRef.current.focus()
    }, [])
    
    return (
        <input ref={inputRef}
        onChange={onChange} 
        name={name} 
        value={value} 
        type={type} 
        placeholder={placeholder}
        required={required} />
    )
}

export default Input;

Input.defaultProps = {
    type: "text",
    required: false
}