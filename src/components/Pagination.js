import React from 'react';
import { useNavigate } from "react-router-dom"

const Pagination = ({ totalPage, page }) => {
  const newArr = [...Array(totalPage)].map((_, i) => i + 1)

  const navigate = useNavigate()
  const isActive = (index) => {
    if(index === page) return "active"
    return ""
  }
  const prev = () => {
    const newPage = Math.max(page - 1, 1)
    navigate(`/products?page=${newPage}`)
  }
  const next = () => {
    const newPage = Math.min(page + 1, totalPage)
    navigate(`/products?page=${newPage}`)

  }
  const jup = (num) => {
    navigate(`/products?page=${num}`)
  }
  return (
    <div className='panigation'>
        <button className='panigation--button' onClick={prev}>&laquo;</button>
        {
          newArr.map(item => (
            <button key={item} className={`panigation--button ${isActive(item)}`} onClick={() => jup(item)}>{item}</button>
          ))
        }
        <button className='panigation--button' onClick={next}>&raquo;</button>
    </div>
  )
}

export default Pagination