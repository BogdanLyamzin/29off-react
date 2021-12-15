import { Component } from "react";

import ProductListItem from "./ProductListItem";

import { productsApi } from "../../shared/services";

import styles from "./ProductList.module.css";

class ProductList extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
        page: 1,
        finish: false
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.fetchProducts();
    }

    componentDidUpdate(prevProps, prevState) {
        const { loading, page } = this.state;
        if (loading && prevState.page !== page) {
            this.fetchProducts()
        }
    }

    async fetchProducts() {
        const { page } = this.state;
        try {
            const { data } = await productsApi.getProducts(page);
            this.setState(({ items }) => {
                const newState = {
                    items: [...items, ...data],
                    loading: false
                };
                if (data.length < 8) {
                    newState.finish = true;
                }

                return newState
            })
        } catch (error) {
            this.setState({error, loading: false})
        }
        // axios.get(`http://localhost:4000/products?_page=${page}&_limit=8`)
        // .then(({data}) => {
        //     this.setState(({items}) => {
        //         const newState = {
        //             items: [...items, ...data],
        //             loading: false
        //         };
        //         if(!data.length < 8){
        //             newState.finish = true;
        //         }

        //         return newState
        //     })
        // })
        // .catch(error => this.setState({error, loading: false}))
    }

    loadMore = () => {
        this.setState(({ page }) => ({
            loading: true,
            page: page + 1
        }))
    }

    render() {
        const { items, error, loading, finish } = this.state;
        const { loadMore } = this;

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
}

export default ProductList;