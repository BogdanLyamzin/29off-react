import { useState, useEffect, useCallback } from "react";
import {useLocation, useHistory} from "react-router-dom";

import Modal from "../Modal/Modal";

import SearchForm from "./SearchForm"
import ProductFullInfo from "./ProductFullInfo";
import ProductSearchItem from "./ProductSearchItem";

import { productsApi } from "../../shared/services";

import styles from "./ProductSearch.module.css";

const initialState = {
    items: [],
    loading: false,
    error: null,
    page: 1,
    modalOpen: false,
    modalProduct: {}
}

const ProductsSearch = () => {
    const [state, setState] = useState(initialState);
    const location = useLocation();
    const history = useHistory();

    useEffect(()=> {
        const fetchProducts = async () => {
            const searchParams = new URLSearchParams(location.search);
            const query = searchParams.get("query");
            const {page} = state;
            try {
                const {data} = await productsApi.searchProducts(page, query);
                setState(({items}) => {
                    return {
                        ...state,
                        items: [...items, ...data],
                        loading: false,
                        error: null
                    }
                })
            } catch (error) {
                setState({
                    loading: false,
                    error
                })
            }
        }

       if(location.search) {
        fetchProducts();
       }
    }, [location.search])
    
    const changeQuery = useCallback(({ query }) => {
        history.push({
            pathname: location.pathname,
            search: `query=${query}`
        });
    }, []);

    const loadMore = () => {
        setState({...state, page: state.page + 1});
    }

    const showModal = useCallback((id) => {
        setState(prevState => {
            const { items } = prevState;
            const modalProduct = items.find(item => item.id === id);
            return {
                ...state,
                modalOpen: true,
                modalProduct
            }
        })
    }, [])

    const closeModal = (e) => {
        setState({
            ...state,
            modalOpen: false
        })
    }
    
    const elements = state.items.map(item => <ProductSearchItem onClick={showModal} key={item.id} {...item} />)
    const {modalOpen, modalProduct, loading, finish, error} = state;

    return (
        <div>
            {modalOpen && (<Modal closeModal={closeModal}>
                <ProductFullInfo {...modalProduct} />
            </Modal>)}
            <h2 className={styles.title}>Product Search</h2>
            <SearchForm onSubmit={changeQuery} />
            {error && <p>Не удалось загрузить товары</p>}
            {!error && (<ul className={styles.list}>
                {elements}
            </ul>)}
            {loading && <p>....Loading</p>}
            {!finish && <button onClick={loadMore}>Load more</button>}
        </div>
    )
}

export default ProductsSearch