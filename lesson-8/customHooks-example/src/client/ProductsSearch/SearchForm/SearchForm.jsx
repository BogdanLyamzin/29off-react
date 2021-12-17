import { useForm } from "../../../shared/hooks";

import { initialState } from "./initialState";

const SearchForm = ({ onSubmit }) => {
    const {state, handleChange, handleSubmit} = useForm(initialState, onSubmit);
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="query" value={state.query} type="text" placeholder="Product name" required />
            <button type="submit">Поиск</button>
        </form>
    )
}

export default SearchForm;