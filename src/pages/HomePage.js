import { useEffect, useState, useMemo } from "react";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import useQuery from "../hooks/useQuery";
import { useLocation } from "react-router-dom";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);

    const { search } = useLocation();
    const {data, loading, error} = useQuery(`/products?limit=${limit}&page=${page}`);
    useEffect(() => {
        if(data?.products) return setProducts(data?.products);
    }, [data?.products])
    const totalPage = useMemo(() => {
        if(!data?.count) return 0;

        return Math.ceil(data?.count / limit);
    }, [data?.count])

    useEffect(() => {
        const page = new URLSearchParams(search).get("page") || 1;
        setPage(Number(page));
    }, [search])
    return (
        <div className="home">
            {/* <Products products={products} />
            {loading && <div>Loading...</div>} */}
            {loading ? <div>Loading...</div> : <Products products={products} />}
            {error && <div>{error}</div>}
            <Pagination totalPage={totalPage} page={page} />
        </div>
    )
}

export default HomePage;    