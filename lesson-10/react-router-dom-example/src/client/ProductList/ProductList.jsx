import { useState, useEffect } from "react";

import ProductListItem from "./ProductListItem";

import { productsApi } from "../../shared/services";

import styles from "./ProductList.module.css";

import { initialState } from "./initialState"

const ProductList = () => {
    const [state, setState] = useState({ ...initialState });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await productsApi.getProducts(state.page);

                setState(({ items }) => {
                    const newState = {
                        ...state,
                        items: [...items, ...data],
                        loading: false
                    };
                    if (data.length < 8) {
                        newState.finish = true;
                    }

                    return newState
                })
            } catch (error) {
                setState({ ...state, error, loading: false })
            }
        }

        setState({ ...state, loading: true });
        fetchProducts();
    }, [state.page]);

    const loadMore = () => {
        setState(({ page }) => ({
            ...state,
            loading: true,
            page: page + 1
        }))
    }

    const { items, error, loading, finish } = state;

    const elements = items.map(item => <ProductListItem key={item.id} {...item} />)

    return (
        <div>
            <h2 className={styles.title}>Product List</h2>
            {error && <p>Не удалось загрузить товары</p>}
            {!error && (<ul className={styles.list}>
                {elements}
            </ul>)}
            {loading && <p>....Loading</p>}
            {!finish && <button onClick={loadMore}>Load more</button>}
        </div>
    )
}

export default ProductList;