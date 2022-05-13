import React from 'react'

const ProductInfo = ({ product }) => {
  return (
    <div className='detail'>
        <div className='detail__banner'>
            <div className='detail__bg'></div>
            <img src={product.banner} />
            <div className='detail__banner--textbox'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <button>add to card</button>
            </div>
            <div className='detail__banner--img'>
                <div className='detail__bg--img'></div>
                <img className='detail__bg--image' src={product.image} />
            </div>
        </div>
    </div>
  )
}

export default ProductInfo