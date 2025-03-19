
import './App.css';
import './components/navbar/Navbar.jsx'
import { Navbar } from './components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Whatever } from './components/page/Whatever.jsx'
import { Shop } from './components/page/Shop.jsx'
// import { Features } from './components/page/Features.jsx'
import { ShopCategory } from './components/page/ShopCategory.jsx'
import men_banner from './components/assets/men_banner.png';
import women_banner from './components/assets/women_banner.png';
import kid_banner from './components/assets/kid_banner.png';


import { Product } from './components/page/Product.jsx'
import { Cart } from './components/page/Cart.jsx';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Whatever />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/features" element={<Features />} /> */}
          <Route path="/men" element={<ShopCategory banner={men_banner} category='men' />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category='women' />} />
          <Route path="/kid" element={<ShopCategory banner={kid_banner} category='kid' />} />


          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
