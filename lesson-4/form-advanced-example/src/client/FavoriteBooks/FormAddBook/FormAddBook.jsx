import { Component } from "react";
import {nanoid} from "nanoid";

import InputField from "../../../shared/components/InputField";

import {fields} from "./fields"
import { initialState } from "./initialState"

class FormAddBook extends Component {
    authorId = nanoid()

    titleId = nanoid()

    favoriteId = nanoid()

    genreId = nanoid()

    state = {
        ...initialState
    }

    onSubmit() {
        this.props.onSubmit(this.state);
        this.setState({ ...initialState })
    }

    handleChange = ({ target }) => {
        const { name, value, checked, type } = target;
        const newValue = type === "checkbox" ? checked : value;
        this.setState({ [name]: newValue });
    }

    render() {
        const {handleChange, onSubmit} = this;
        const {authorId, titleId, favoriteId, genreId} = this;
        const {author, title, favorite, genre} = this.state;

        return (
            <form onSubmit={onSubmit}>
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
}

export default FormAddBook;