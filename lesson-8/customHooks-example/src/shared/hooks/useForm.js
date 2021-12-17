import {useState} from "react";

export const useForm = (initialState, onSubmit)=> {
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

    return {state, setState, handleChange, handleSubmit};
}

