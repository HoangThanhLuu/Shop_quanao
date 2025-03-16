
import './App.css';
import './components/navbar/Navbar.jsx'
import { Navbar } from './components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Whatever } from './components/page/Whatever.jsx'
import { Shop } from './components/page/Shop.jsx'
import { Features } from './components/page/Features.jsx'

import { Product } from './components/page/Product.jsx'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Whatever />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/features" element={<Features />} />
          <Route path="/product" element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/shop" element={<Shop />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
