import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './component/Category';
import Product from './component/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;