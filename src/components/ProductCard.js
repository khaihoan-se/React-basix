import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  return (
    <div className="card">
        <div className="card-img">
            <img src={product.image} alt={product.name} />
        </div>
        <div className='card-body'>
            <div className='card-title'>
                <Link to={`/products/${product._id}`}>
                    <h2>{product.title}</h2>
                </Link>
            </div>
            <div className='card-price'>{product.price}</div>
            <div className='card-button'>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    </div>
  );
}

export default ProductCard;
