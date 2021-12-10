import {Component} from "react";
import { nanoid } from "nanoid";

import BookList from "./BookList";
import FormAddBook from "./FormAddBook";

import styles from "./FavoriteBooks.module.css";

class FavoriteBooks extends Component {

    state = {
        items: [],
        filter: ""
    }

    onAddBook = (data)=> {
        this.setState(({items}) => {
            const newBook = {
                ...data,
                id: nanoid()
            };

            return {
                items: [...items, newBook]
            }
        })
    }

    handleChange = ({ target }) => {
        const { name, value, checked, type } = target;
        const newValue = type === "checkbox" ? checked : value;
        this.setState({ [name]: newValue });
    }

    getFilteredBooks = ()=> {
        const {items, filter} = this.state;
        const normalizeFilter = filter.toLowerCase()
        if(!filter){
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

    render(){
        const {filter} = this.state;
        const {onAddBook, handleChange, getFilteredBooks} = this;

        const books = getFilteredBooks();

        return (
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Список книг</h2>
                <div className={styles.content}>
                   <div className={styles.form}>
                        <FormAddBook onSubmit={onAddBook} />
                   </div>
                    <div className={styles.list}>
                        <input value={filter} onChange={handleChange} name="filter" type="text" placeholder="Filter" />
                        <BookList items={books} />
                    </div>
                </div>
            </div>
        )
    }
}

export default FavoriteBooks;