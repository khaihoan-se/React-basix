import { Routes, Route } from 'react-router-dom'
import HomePage  from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<HomePage />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App;