import "./CartButton.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { useSelector } from "react-redux";

const CartButton = (props) => {
    const totalCartQuantity = useSelector((state) => {
        return state.cart.totalQuantity;
    });
    const dispatch = useDispatch();
    return (
        <button
            className="cartbutton"
            onClick={() => {
                dispatch(uiActions.toggleCart());
            }}
        >
            <span>My Cart</span>
            <span className="cartbadge">{totalCartQuantity}</span>
        </button>
    );
};

export default CartButton;
