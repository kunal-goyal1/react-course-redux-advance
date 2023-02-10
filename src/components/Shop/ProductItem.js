import Card from "../UI/Card";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const ProductItem = (props) => {
    const { title, price, description } = props;
    const dispatch = useDispatch();

    return (
        <li className="productitem">
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className="productprice">${price.toFixed(2)}</div>
                </header>
                <p className="description">{description}</p>
                <div className="productactions">
                    <button
                        onClick={() => {
                            dispatch(cartActions.addItem(props));
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
