const SingleProduct = (props)=> {
    const {title, description, type, price, height, weight} = props;

    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{type}</p>
            <p>{price}</p>
            <p>{height}</p>
            <p>{weight}</p>
        </div>
    )
}

export default SingleProduct;