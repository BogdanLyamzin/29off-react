import {Component} from "react";
import { nanoid } from "nanoid";

import BookList from "./BookList";
import FormAddBook from "./FormAddBook";

import styles from "./FavoriteBooks.module.css";

// const func = ()=> {
//     const response = fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(response => {
//             console.log(response)
//         });
//         console.log("after fetch")
//     return response
// }
// const result = func()
// console.log(result)
class FavoriteBooks extends Component {
    // constructor(){
    //     super();
    //     console.log("constructor")

    //     this.state = {
    //         items: [],
    //         filter: ""
    //     }
    // }
    state = {
        items: [],
        filter: ""
    }

    static getDerivedStateFromProps(props, state){
        // if(props.items.length > state.items) {
        //     return props.items;
        // }
        // console.log("getDerivedStateFromProps");
        return null;
        // console.log("state", state);
        // console.log("props", props);
    }

    componentDidMount() {
        const books = JSON.parse(localStorage.getItem("books"));
        // if(!Array.isArray(books)){
        //     return;
        // }
        // if(books && books.length)
        if(books?.length){
            this.setState(prevState => {
                return {
                    items: [...prevState.items, ...books]
                }
            })
        }

    }

    componentDidUpdate() {
        const {items} = this.state;
        localStorage.setItem("books", JSON.stringify(items))
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

    onDeleteBook = (id)=> {
        this.setState(({items}) => {
            const newItems = items.filter(item => item.id !== id)
            return {
                items: newItems
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
        if(!filter){
            return items
        }
        const normalizeFilter = filter.toLowerCase()

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
        const {onAddBook, handleChange, onDeleteBook, getFilteredBooks} = this;

        const books = getFilteredBooks();
        const items = books.map(item => ({...item, onDelete: ()=>onDeleteBook(item.id)}));
        
        return (
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Список книг</h2>
                <div className={styles.content}>
                   <div className={styles.form}>
                        <FormAddBook onSubmit={onAddBook} />
                   </div>
                    <div className={styles.list}>
                        <input value={filter} onChange={handleChange} name="filter" type="text" placeholder="Filter" />
                        <BookList onDelete={onDeleteBook} items={items} />
                    </div>
                </div>
            </div>
        )
    }
}

export default FavoriteBooks;