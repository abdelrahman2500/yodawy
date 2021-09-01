import "./App.scss";
import { useContext } from "react";
import { Context } from "./context/Context";
import Home from "./pages/home/Home";
import HomeAr from "./pages/home/HomeAr";
import { Redirect, Route, Switch } from "react-router-dom";
import ForInsurers from "./pages/insurers/insurers";
import AboutUs from "./pages/about-us/AboutUs";
import ForPharmacies from "./pages/pharmacies/ForPharmacies";
import ForDoctors from "./pages/doctors/Doctors";
import Contact from "./pages/contact/Contact";
import ContactAr from "./pages/contact/ContactAr";
import Shop from "./pages/shop/Shop";
import ShopAr from "./pages/shop/ShopAr";
import Blog from './pages/blog/Blog';
import BlogAr from './pages/blog/BlogsAr';
import ForPharmaciesAr from "./pages/pharmacies/ForPharmaciesAr";
import ForInsurersAr from "./pages/insurers/insurersAr";
import ForDoctorsAr from "./pages/doctors/DoctorsAr";
import AboutUsAr from "./pages/about-us/AboutUsAr";
import Cart from './pages/crat/Cart';
import CartAr from './pages/crat/CartAr';
import Login from './pages/login/Login';
import LoginAr from './pages/login/LoginAr';
import AddProduct from './pages/addProducr/AddProduct';
import AddProductAr from './pages/addProducr/AddProductAr';
import NotFound from './components/notFound/NotFound';
import NotFoundAr from './components/notFound/NotFoundAr';

function App() {
  const context = useContext(Context);

  return (
    <div className="text-capitalize">
      {context.lang === "en" ? (
        <div className="AppEn">
          {/* hello english */}
          <Switch>
            {/* <Redirect exact from="/" to="/yodawy" /> */}
            <Route path="/yodawy" exact>
              <Home />
            </Route>
            <Route path="/yodawy/shop" >
              <Shop />
            </Route>
            <Route path="/yodawy/pharamcies" exact>
              <ForPharmacies />
            </Route>
            <Route path="/yodawy/insurers" exact>
              <ForInsurers />
            </Route>
            <Route path="/yodawy/doctors" exact>
              <ForDoctors />
            </Route>
            <Route path="/yodawy/about" exact>
              <AboutUs />
            </Route>
            <Route path="/yodawy/blog" exact>
              <Blog />
            </Route>
            <Route path="/yodawy/contact" exact>
              <Contact />
            </Route>
            <Route path="/yodawy/cart" exact>
              <Cart />
            </Route>
            <Route path="/yodawy/login" exact>
              <Login />
            </Route>
            <Route path="/yodawy/addproduct" exact>
              <AddProduct />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      ) : (
        <div className="AppAr" dir="rtl">
          {/* hello arabic */}
          <Switch>
            {/* <Redirect exact from="/" to="/yodawy" /> */}
            <Route path="/yodawy" exact>
              <HomeAr />
            </Route>
            <Route path="/yodawy/shop" >
              <ShopAr />
            </Route>
            <Route path="/yodawy/pharamcies" exact>
              <ForPharmaciesAr />
            </Route>
            <Route path="/yodawy/insurers" exact>
              <ForInsurersAr />
            </Route>
            <Route path="/yodawy/doctors" exact>
              <ForDoctorsAr />
            </Route>
            <Route path="/yodawy/about" exact>
              <AboutUsAr />
            </Route>
            <Route path="/yodawy/blog" exact>
              <BlogAr />
            </Route>
            <Route path="/yodawy/contact" exact>
              <ContactAr />
            </Route>
            <Route path="/yodawy/cart" exact>
              <CartAr />
            </Route>
            <Route path="/yodawy/login" exact>
              <LoginAr />
            </Route>
            <Route path="/yodawy/addproduct" exact>
              <AddProductAr />
            </Route>
            <Route path="*">
              <NotFoundAr />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
