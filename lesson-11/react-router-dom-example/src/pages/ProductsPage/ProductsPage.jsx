import PageWrapper from "../../shared/containers/PageWrapper";
import ProductsList from "../../client/ProductList";

const ProductsPage = ({title})=> {
    return (
        <PageWrapper title={title}>
            <ProductsList />
        </PageWrapper>
    )
}

export default ProductsPage;