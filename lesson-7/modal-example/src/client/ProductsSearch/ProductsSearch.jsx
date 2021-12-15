import {Component} from "react";

import Modal from "../Modal/Modal";

import SearchForm from "./SearchForm"
import ProductFullInfo from "./ProductFullInfo";
import ProductSearchItem from "./ProductSearchItem";

import { productsApi } from "../../shared/services";

import styles from "./ProductSearch.module.css";

class ProductsSeach extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
        page: 1,
        query: "",
        modalOpen: false,
        // largeImageURL: "",
        modalProduct: {}
    }

    componentDidUpdate(prevProps, prevState){
        const {query} = this.state;
        if(prevState.query !== query && query) {
            this.setState({loading: true});
            this.fetchProducts()
        }
    }

    async fetchProducts() {
        const {page, query} = this.state;
        try {
            const {data} = await productsApi.searchProducts(page, query);
            this.setState(({items, page}) => {
                return {
                    items: [...items, ...data],
                    loading: false,
                    error: null
                }
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }


    changeQuery = ({query})=> {
        this.setState({query})
    }

    loadMore = ()=> {

    }

    showModal = (id)=> {
        this.setState(prevState => {
            const {items} = prevState;
            const modalProduct = items.find(item => item.id === id);
            return {
                modalOpen: true,
                modalProduct
            }
            // const {largeImageURL} = items.find(item => item.id === id);
            // return {
            //     modalOpen: true,
            //     largeImageURL
            // }
        })
    }

    closeModal = (e)=> {
        this.setState({
            modalOpen: false
        })
    }

    render(){
        const { items, error, loading, finish, modalOpen, modalProduct } = this.state;
        const { loadMore, changeQuery, showModal, closeModal } = this;
        const elements = items.map(item => <ProductSearchItem onClick={()=>showModal(item.id)} key={item.id} {...item} />)
        
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
}

export default ProductsSeach