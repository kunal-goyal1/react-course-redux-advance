import ProductItem from "./ProductItem";
import classes from "./Products.css";

const DUMMY_PRODUCTS = [
    {
        id: Math.random().toString(),
        price: 6,
        title: "book",
        description: "first book",
    },
    {
        id: Math.random().toString(),
        price: 12,
        title: "book second",
        description: "second book",
    },
];

const Products = (props) => {
    return (
        <section className="products">
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((product) => {
                    return (
                        <ProductItem
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            id={product.id}
                        ></ProductItem>
                    );
                })}
            </ul>
        </section>
    );
};

export default Products;
