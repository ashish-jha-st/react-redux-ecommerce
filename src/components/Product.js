import { useState } from 'react'
import { Link } from 'react-router-dom';

function Product(props) {
    const {
        title,
        price,
        images,
        description,
        id,
    } = props.product;
    // console.log("imagsss", props.product.images);
    // const [img, setImg] = useState(images[0]);
    return (
        <div className="card h-100 product">
            <img className="card-img-top product__img w-50 mx-auto" src={images[0]} />
            <div className="card-body product__text">
                <h4 className="card-title product__title">
                    {/* <Link to={`/products/${id}`}>{title}</Link> */}
                </h4>
                <h5 className="product__price">$ {Math.ceil(price)}</h5>
                <p className="card-text product__description">{description}</p>
                <button className="btn btn-info product__add-to-cart">Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product