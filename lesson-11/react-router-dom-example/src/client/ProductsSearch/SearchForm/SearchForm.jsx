import { useState, memo } from "react";

import Input from "../../../shared/Input";

import { fields } from "./fields";
import { initialState } from "./initialState"

const SearchForm = ({ onSubmit }) => {
    const [state, setState] = useState(initialState);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(state);
        setState({ ...initialState })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Input onChange={handleChange} value={state.query} {...fields.query} />
            <button type="submit">Поиск</button>
        </form>
    )
}

export default memo(SearchForm);