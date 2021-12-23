import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const MainPage = lazy(() => import("./pages/MainPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));
const ProductsSearchPage = lazy(() => import("./pages/ProductsSearchPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Routes = () => {
    return (
        <Switch>
            <Suspense fallback={<p>Loading....</p>}>
                <Route exact path="/" render={() => <MainPage title="Main Page" />} />
                <Route exact path="/products">
                    <ProductsPage title="Products Page" />
                </Route>
                <Route path="/products/:id">
                    <SingleProductPage />
                </Route>
                <Route path="/products-search">
                    <ProductsSearchPage title="Products Search Page" />
                </Route>
                <Route component={NotFound} />
            </Suspense>
        </Switch>
    )
}

export default Routes;