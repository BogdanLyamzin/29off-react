import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/products",
    params: {
        _limit: 4
    }
});

const getProducts = (_page)=> {
    return instance.get("/", {
        params: {
            _page,
            _limit: 8
        }
    })
}

const searchProducts = (_page = 1, q)=> {
    return instance.get("/", {
        params: {
            _page,
            q
        }
    })
}

export const productsApi = {
    getProducts,
    searchProducts
}


