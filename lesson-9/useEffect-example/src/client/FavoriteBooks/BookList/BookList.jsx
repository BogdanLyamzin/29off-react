const BookList = ({items})=> {
    
    const elements = items.map(item => <li key={item.id}>
        <p>Автор: {item.author}</p>
        <p>Название: {item.title}</p>
        <p>Жанр: {item.genre}</p>
        <button onClick={item.onDelete}>Удалить</button>
    </li>);

    return (
        <ul>
            {elements}
        </ul>   
    )
}

export default BookList;