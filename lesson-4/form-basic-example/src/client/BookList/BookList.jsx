import {Component} from "react";
import {nanoid} from "nanoid";

import styles from "./BookList.module.css";

class BookList extends Component {
    authorId = nanoid()

    titleId = nanoid()

    favoriteId = nanoid()

    genreId = nanoid()

    state = {
        items: [],
        author: "",
        title: "",
        favorite: false,
        genre: "fantasy",
        filter: ""
    }

    onAddBook = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            const {author, title, favorite, genre, items} = prevState;
            const newBook = {
                author,
                title,
                favorite,
                genre,
                id: nanoid()
            };

            return {
                items: [...items, newBook],
            }
        })
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            author: "",
            title: "",
            genre: "fantasy",
            favorite: false
        })
    }

    handleChange = ({target}) => {
        const {name, value, checked, type} = target;
        const newValue = type === "checkbox" ? checked : value;
        this.setState({[name]: newValue});
    }

    getFilteredBooks = () => {
        const {items, filter} = this.state;
        const normalizeFilter = filter.toLowerCase()
        if (!filter) {
            return items
        }
        const filteredBooks = items.filter(({title, author}) => {
            const normalizeTitle = title.toLowerCase();
            const normalizeAuthor = author.toLowerCase();
            const result = normalizeTitle.includes(normalizeFilter) || normalizeAuthor.includes(normalizeFilter)
            return result;
        });
        return filteredBooks
    }

    render() {
        const {author, title, favorite, genre, filter} = this.state;
        const {onAddBook, handleChange, getFilteredBooks} = this;

        const {authorId, titleId, favoriteId, genreId} = this;
        const books = getFilteredBooks();
        const elements = books.map(item => <li key={item.id}>
            <p>Автор: {item.author}</p>
            <p>Название: {item.title}</p>
            <p>Жанр: {item.genre}</p>
        </li>)

        return (
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Список книг</h2>
                <div className={styles.content}>
                    <form onSubmit={onAddBook} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor={authorId}>Автор книги</label>
                            <input id={authorId} value={author} name="author" onChange={handleChange} type="text"
                                   placeholder="Автор книги" required/>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor={titleId}>Название книги</label>
                            <input id={titleId} value={title} name="title" onChange={handleChange} type="text"
                                   placeholder="Название книги" required/>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor={favoriteId}>Избранная</label>
                            <input id={favoriteId} checked={favorite} name="favorite" onChange={handleChange}
                                   type="checkbox"/>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor={genreId}>Жанр</label>
                            <select id={genreId} value={genre} name="genre" onChange={handleChange}>
                                <option value="fantasy">Фэнтези</option>
                                <option value="fantastic">Фантастика</option>
                            </select>
                        </div>
                        <button type="submit">Добавить</button>
                    </form>
                    <div className={styles.list}>
                        <input value={filter} onChange={handleChange} name="filter" type="text" placeholder="Filter"/>
                        <ul>
                            {elements}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default BookList;