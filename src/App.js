import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import { useDispatch } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS_START" });
    axios
      .get("https://fakestoreapi.com/products")
      .then((resPro) => {
        // console.log(resPro);
        dispatch({ type: "FETCH_PRODUCTS_SUCCES", payload: resPro.data });
      })
      .catch((err) => console.log(err));
    dispatch({
      type: "FETCH_PRODUCTS_FAIL",
      payload: "Ürünler yüklebirken bir hata oluştu",
    });
  }, []);

  return (
    <div className="App" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/products-page/:proid"
            element={<ProductsPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
