import {Component} from "react";

import SearchForm from "./SearchForm"
import ProductSearchItem from "./ProductSearchItem";

import { productsApi } from "../../shared/services";

import styles from "./ProductSearch.module.css";

class ProductsSeach extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
        page: 1,
        query: ""
    }

    componentDidUpdate(prevProps, prevState){
        const {query} = this.state;
        if(prevState.query !== query && query) {
            this.setState({loading: true});
            this.fetchProducts()
        }
    }

    changeQuery = ({query})=> {
        this.setState({query})
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

    loadMore = ()=> {

    }

    render(){
        const { items, error, loading, finish } = this.state;
        const { loadMore, changeQuery } = this;
        const elements = items.map(item => <ProductSearchItem key={item.id} {...item} />)
        
        return (
            <div>
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