import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import {
 Cart,
 Home,
 Login,
 Product,
 ProductList,
 Register,
 SignUp,
 Success,
 TopBar
} from '../pages'

const AppRouter = () => {
    const [scrollY, setScrollY] = useState(0);

    const logit = () => {
      setScrollY(window.pageYOffset);
    };
  
    useEffect(() => {
      const watchScroll = () => {
        window.addEventListener("scroll", logit);
      };
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
    }, [scrollY]);
    return (
        <Routes>
            <Route path="/topbar" element={<TopBar/>}/>
            <Route path="/*" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/productlist" element={<ProductList/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/success" element={<Success/>}/>
        </Routes>
    );
}

export default AppRouter;