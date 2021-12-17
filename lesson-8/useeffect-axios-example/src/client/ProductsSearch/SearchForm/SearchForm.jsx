import { useState } from "react";

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
            <input onChange={handleChange} name="query" value={state.query} type="text" placeholder="Product name" required />
            <button type="submit">Поиск</button>
        </form>
    )
}

export default SearchForm;