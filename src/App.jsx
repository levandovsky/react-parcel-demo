export const App = () => {
    const products = [
        {
            name: "shoes",
            price: 10,
            description: "lalalalala",
        },
        {
            name: "shirt",
            price: 20,
            description: "lalalalala",
        },
        {
            name: "socks",
            price: 3,
            description: "lalalalala",
        },
    ];

    const greeting = <h3>Hello World</h3>;

    const renderedProducts = products.map((product) => (
        <Card key={product.name} header={product.name} body={product.description} footer={product.price} />
    ));

    return (
        <div>
            {greeting}
            {renderedProducts}
        </div>
    );
};
