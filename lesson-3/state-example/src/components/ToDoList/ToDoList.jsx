import { Component } from "react";

import Summary from "./Summary";
import ItemsList from "./ItemsList";

import styles from "./ToDoList.module.css";

import {items} from "./items";

class ToDoList extends Component {
    state = {
        items: [...items.map(item => ({...item}))]
    }

    onDelete = (idx)=> {
        this.setState(({items}) => {
            const newItems = items.filter((_, index) => index !== idx);
            // const newItems = items.map(item => ({...item}));
            // newItems.splice(idx, 1)
            return {
                items: newItems
            }
        })
    }

    render(){
        const {items} = this.state;
        const {onDelete} = this;

        const fullItems = items.map((item, idx) => ({...item, onDelete: ()=> onDelete(idx)}))

        const importantSummary = items.filter(({important}) => important).length;

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
}

export default ToDoList;