import Card from "../UI/Card";
import classes from "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
    const cartItems = useSelector((state) => {
        return state.cart.items;
    });
    return (
        <Card className="cart">
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => {
                    return (
                        <CartItem
                            key={item.id}
                            title={item.title}
                            quantity={item.quantity}
                            price={item.price}
                            id={item.id}
                            total={
                                parseInt(item.price) * parseInt(item.quantity)
                            }
                        ></CartItem>
                    );
                })}
            </ul>
        </Card>
    );
};

export default Cart;
