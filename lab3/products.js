const products = [
    { id: 1, name: 'marker', qty: 100, price: 15 },
    { id: 2, name: 'pen', qty: 50, price: 10 }
];

let nextId = 3;

// Get all products
export const getAllProducts = () => {
    return products;
};

// Add product
export const addProduct = () => {
    const product = {
        id: nextId++,
        name: name,
        qty: qty,
        price: price
    };
    products.push(product);
    return product;
};