import {Link, Route, useParams, useHistory, useLocation} from "react-router-dom";

import ReviewPage from "../../pages/ReviewPage";

const SingleProduct = (props)=> {
    const {title, description, type, price, height, weight} = props;

    const {id} = useParams();
    const history = useHistory();
    const location = useLocation();

    const goBack = ()=> {
        if(location.state?.from) {
            history.push(location.state.from);
            return;
        }
        history.push("/products-search");
    }

    return (
        <div>
            <button onClick={goBack}>Go Back</button>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{type}</p>
            <p>{price}</p>
            <p>{height}</p>
            <p>{weight}</p>
            <Link to={{
                pathname: `/products/${id}/review`,
                state: {
                    from: location.state?.from
                }
            }}>Отзывы</Link>
            <Route path="/products/:id/review">
                <ReviewPage title={`${title} reviews`} />
            </Route>
        </div>
    )
}

export default SingleProduct;