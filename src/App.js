// import { Switch } from "@chakra-ui/react";
import * as React from "react";
import { Routes, Route,  } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import Signin from "./components/pages/Auth/signin/signin";
import Signup from "./components/pages/Auth/signup/signup";
import Products from "./components/pages/Auth/Products/products";
import ProductDetail from "./components/pages/ProductDetail/productdetail";
import Profile from "./components/pages/Profile/profile";
import Basket from "./components/pages/Auth/Basket/basket";
import ProtectedRoute from "./components/pages/ProtectedRoute";
import Error404 from "./components/pages/Error404/error";

function App() {
  return (
    <div id="content">

      <header>
        <Navbar />
      </header>

      <Routes>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="productdetail" element={<ProductDetail />} /> */}
        <Route path="/product/:product_id" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/basket" element={<Basket />} />

        <Route path="/" element={<Products />} />
        {/* Site açıldığında direkt Products sayfası açılsın şimdilik */}
        
        <Route path="/*" element={<Error404 />} />
  {/* hiçbir şey ile eşleşmez ise Error404 ile eşleşecek */}

        <Route 
        path="/profile" 
        element={<ProtectedRoute> <Profile /> </ProtectedRoute> } />
      {/* /profile dediğimiz ekran giriş yapılarak görüntülenebilecek bir ekran olduğu için özelleştirilmiş bir tane Route oluşturduk */}

      </Routes>
    </div>
  );
}


export default App;
