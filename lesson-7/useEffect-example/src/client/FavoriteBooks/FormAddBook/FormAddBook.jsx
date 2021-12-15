import { useState } from "react";
import { nanoid } from "nanoid";

import InputField from "../../../shared/components/InputField";

import { fields } from "./fields"
import { initialState } from "./initialState"

const authorId = nanoid()

const titleId = nanoid()

const favoriteId = nanoid()

const genreId = nanoid()

const FormAddBook = ({ onSubmit }) => {
    const [data, setData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
        setData(initialState);
    }

    const handleChange = ({ target }) => {
        const { name, value, checked, type } = target;
        const newValue = type === "checkbox" ? checked : value;
        setData({ ...data, [name]: newValue });
    }

    const {author, title, favorite, genre} = data;
    
    return (
        <form onSubmit={handleSubmit}>
            <InputField {...fields.author} value={author} onChange={handleChange} id={authorId} />
            <InputField {...fields.title} value={title} onChange={handleChange} id={titleId} />
            <InputField {...fields.favorite} value={favorite} onChange={handleChange} id={favoriteId} />

            <div>
                <label htmlFor={genreId}>Жанр</label>
                <select id={genreId} value={genre} name="genre" onChange={handleChange}>
                    <option value="fantasy">Фэнтези</option>
                    <option value="fantastic">Фантастика</option>
                </select>
            </div>
            <button type="submit">Добавить</button>
        </form>
    )
}

export default FormAddBook;