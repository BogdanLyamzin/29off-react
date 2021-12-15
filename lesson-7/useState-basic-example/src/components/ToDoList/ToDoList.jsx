import { useState } from "react";

import Summary from "./Summary";
import ItemsList from "./ItemsList";

import styles from "./ToDoList.module.css";

import { arr } from "./items";

const ToDoList = () => {
    const [items, setItems] = useState([...arr]);

    const onDelete = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }

    const fullItems = items.map(item => ({ ...item, onDelete: () => onDelete(item.id) }))

    const importantSummary = items.filter(({ important }) => important).length;

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>To Do List</h2>
            <div className={styles.content}>
                <ItemsList items={fullItems} />
                <Summary summary={items.length} importantSummary={importantSummary} />
            </div>
        </div>
    )
}

export default ToDoList;