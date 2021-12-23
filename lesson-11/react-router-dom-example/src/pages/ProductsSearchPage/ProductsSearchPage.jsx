import PageWrapper from "../../shared/containers/PageWrapper";
import ProductsSearch from "../../client/ProductsSearch";

const ProductsSearchPage = ({title})=> {
    return (
        <PageWrapper title={title}>
            <ProductsSearch />
        </PageWrapper>
    )
}

export default ProductsSearchPage;