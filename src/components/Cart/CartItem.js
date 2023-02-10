import "./Cartitem.css";
import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
    const { title, quantity, total, price } = props;
    const dispatch = useDispatch();

    return (
        <li className="cartitem">
            <header>
                <h3>{title}</h3>
                <div className="cartprice">
                    ${total.toFixed(2)}{" "}
                    <span className="cartitemprice">
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className="cartdetails">
                <div className="cartquantity">
                    x <span>{quantity}</span>
                </div>
                <div className="cartactions">
                    <button
                        onClick={() => {
                            dispatch(cartActions.removeItem(props.id));
                        }}
                    >
                        -
                    </button>
                    <button
                        onClick={() => {
                            dispatch(cartActions.addItem(props));
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
