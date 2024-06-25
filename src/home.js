import React from 'react';
import ProductList from "./product";
const Home = () => {
    return (
        <div>
            <h1 className="text-center mt-4">Welcome to My Flipkart-like Store</h1>
            <ProductList />
        </div>
    );
}

export default Home;