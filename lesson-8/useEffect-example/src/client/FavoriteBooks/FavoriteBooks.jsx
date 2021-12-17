import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import BookList from "./BookList";
import FormAddBook from "./FormAddBook";

import styles from "./FavoriteBooks.module.css";

/*
1. Если в localstorage null - не перезаписывать состояние
2. Если в locastorage не пустой массив - перезаписывать состояние
3. Если при обновлении в localstorage размер массива не равен массиву в 
localstorage - перезаписывать localstorage
*/

const FavoriteBooks = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const books = JSON.parse(localStorage.getItem("books"));
        if (!Array.isArray(books)) {
            return;
        }
        if (books.length) {
            setItems(books);
        }
    }, []);

    useEffect(()=> {
        const books = JSON.parse(localStorage.getItem("books"));
        // if(JSON.stringify(books) !== JSON.stringify(items))
        if(books.length !== items.length) {
            localStorage.setItem("books", JSON.stringify(items))
        }
    }, [items]);

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