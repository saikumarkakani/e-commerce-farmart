import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/home.component";
import { AboutUs } from "./Components/Navs/AboutUs/aboutus.component";
import { AllProducts } from "./Components/Navs/All-Products/allproducts.component";
import { Login } from "./Components/Login/login.component";
import { Signin } from "./Components/Login/Sign-in/signin.component";
import { Cart } from "./Components/Navs/Add-Cart/addcart.component";
import { Wishlist } from "./Components/Navs/Wish-List/wishlist.component";
import { NavStores } from "./Components/Navs/NavStore/store.component";
import { MyBlogs } from "./Components/Navs/Blog/blog.component";
import { Faq } from "./Components/Navs/Faq/faq.component";
import { Compare } from "./Components/Navs/Compare/compare.component";
import { AddTosavers } from "./Components/Navs/Add-Products/addTopsavers.component";
import { AddJustLand } from "./Components/Navs/Add-Products/Just-LandProducts/addjustLand.component";
import { Contact } from "./Components/Navs/Contact/contact.component";
import { ProductsCate } from "./Components/Navs/All-Products/Product-Category/products.component";
import { SpecialPrice } from "./Components/Navs/Special-Price/specialprice.component";







export function AppRoutes(){
    return(
        <Routes>
            
            <Route path="/" element={<Home></Home>} ></Route>
            <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
            <Route path="/products" element={<AllProducts></AllProducts>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/Signin" element={<Signin></Signin>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
            <Route path="/stores" element={<NavStores></NavStores>}></Route>
            <Route path="/blog" element={<MyBlogs></MyBlogs>}></Route>
            <Route path="/faq" element={<Faq></Faq>}></Route>
            <Route path="/compare" element={<Compare></Compare>}></Route>
            <Route path="/addTop" element={<AddTosavers></AddTosavers>}></Route>
            <Route path="/addJust" element={<AddJustLand></AddJustLand>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/procate" element={<ProductsCate></ProductsCate>}></Route>
            <Route path="/special" element={<SpecialPrice></SpecialPrice>}></Route>

          
     
       
        </Routes>
    )
}
