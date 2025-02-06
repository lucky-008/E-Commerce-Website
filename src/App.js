import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Footer from "./components/footer";
import ProductModel from "./components/productmodel"
import Listing from "./pages/Listing";
import ProductDetails from "./pages/ProductDetails";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [isOpenProductModal,setisOpenProductModal]= useState(false);
  
  useEffect(() => {
    
    getCountry("https://countriesnow.space/api/v0.1/countries/");
    
  }, []);
  
  const getCountry = async (url) => {
    try {
      const res = await axios.get(url);
      
      setCountryList(res.data.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  // Pass the context value
  const values = { countryList ,
  setisOpenProductModal,
  isOpenProductModal
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
         
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route exact={true} path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
        {
        isOpenProductModal===true && <ProductModel/>
        
    }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
