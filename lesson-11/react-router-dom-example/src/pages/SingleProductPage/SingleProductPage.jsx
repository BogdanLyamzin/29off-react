import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

import PageWrapper from "../../shared/containers/PageWrapper";
import SingleProduct from "../../client/SingleProduct";

import {productsApi} from "../../shared/services";

import {initialState} from "./initialState"

const SingleProductPage = ()=> {
    const [state, setState] = useState(initialState);

    const {id} = useParams();

    useEffect(()=> {
        const fetchProduct = async()=> {
            try {
                const {data} = await productsApi.getById(id);
                setState({...state, data, loading: false});
            } catch (error) {
                setState({...state, error, loading: false})
            }

        };
        setState({...state, loading: true})
        fetchProduct();
    }, []);

    const {data, loading, error} = state;
    
    return (
        <PageWrapper title={data?.title}>
            {error && <p>Загрузка не удалась</p>}
            {loading && <p>Loading....</p>}
            {data && <SingleProduct {...data} />} 
        </PageWrapper>
    )
}

export default SingleProductPage;