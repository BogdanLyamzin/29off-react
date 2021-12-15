import { useState } from "react";
import { nanoid } from "nanoid";

import BookList from "./BookList";
import FormAddBook from "./FormAddBook";

import styles from "./FavoriteBooks.module.css";

const FavoriteBooks = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");
    // componentDidMount() {
    //     const books = JSON.parse(localStorage.getItem("books"));
    //     // if(!Array.isArray(books)){
    //     //     return;
    //     // }
    //     // if(books && books.length)
    //     if(books?.length){
    //         this.setState(prevState => {
    //             return {
    //                 items: [...prevState.items, ...books]
    //             }
    //         })
    //     }

    // }

    // componentDidUpdate() {
    //     const {items} = this.state;
    //     localStorage.setItem("books", JSON.stringify(items))
    // }

    const onAddBook = (data) => {
        const newBook = {
            ...data,
            id: nanoid()
        };

        setItems([...items, newBook])
    }

    const onDeleteBook = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems)
    }

    const filterChange = ({ target }) => {
        setFilter(target.value)
    }

    const getFilteredBooks = () => {
        if (!filter) {
            return items
        }
        const normalizeFilter = filter.toLowerCase()

        const filteredBooks = items.filter(({ title, author }) => {
            const normalizeTitle = title.toLowerCase();
            const normalizeAuthor = author.toLowerCase();
            const result = normalizeTitle.includes(normalizeFilter) || normalizeAuthor.includes(normalizeFilter)
            return result;
        });
        return filteredBooks
    }

    const books = getFilteredBooks();
    const fullBooks = books.map(item => ({ ...item, onDelete: () => onDeleteBook(item.id) }));

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Список книг</h2>
            <div className={styles.content}>
                <div className={styles.form}>
                    <FormAddBook onSubmit={onAddBook} />
                </div>
                <div className={styles.list}>
                    <input value={filter} onChange={filterChange} name="filter" type="text" placeholder="Filter" />
                    <BookList onDelete={onDeleteBook} items={fullBooks} />
                </div>
            </div>
        </div>
    )

}

export default FavoriteBooks;