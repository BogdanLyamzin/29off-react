import { Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ProductsSearchPage from "./pages/ProductsSearchPage";
import NotFound from "./pages/NotFound";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={()=> <MainPage title="Main Page" />} />
            <Route exact path="/products">
                <ProductsPage title="Products Page" />
            </Route>
            <Route exact path="/products/:id">
                <SingleProductPage />
            </Route>
            <Route path="/products-search">
                <ProductsSearchPage title="Products Search Page" />
            </Route>
            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes;