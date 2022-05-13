import usePagination from "../hooks/usePagination";

const Pagination = ({ totalPages, page }) => {
  const { 
    firstArr, lastArr, isActive, prev, next, jump 
  } = usePagination(totalPages, page)
  return (
    <div className='panigation'>
        <button className='panigation--button' onClick={prev}>&laquo;</button>
        {
          firstArr.map(item => (
            <button key={item} className={`panigation--button ${isActive(item)}`} onClick={() => jump(item)}>{item}</button>
          ))
        }
        {lastArr.length > 0 && <button className='panigation--button'>...</button>}
        {
          lastArr.map(item => (
            <button key={item} className={`panigation--button ${isActive(item)}`} onClick={() => jump(item)}>{item}</button>
          ))
        }
        <button className='panigation--button' onClick={next}>&raquo;</button>
    </div>
  )
}

export default Pagination