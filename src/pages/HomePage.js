import { useEffect, useState } from "react";
import axios from "axios";
import Products from "../components/Products";

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products').then(res => {
            console.log(res.data);
            setProducts(res.data.products);
        });
    }, []);
    console.log('ok')
    return (
        <div>
            <Products products={products} />
        </div>
    )
}

export default HomePage;