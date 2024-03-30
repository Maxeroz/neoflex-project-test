import "./index.css";

import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Route, Routes, useActionData } from "react-router-dom";
import { useEffect, useReducer } from "react";

import data from "./data/data";

function getDefaultCart() {
  let cart = {};
  for (
    let i = 1;
    i < [...data.headphones, ...data.wirelessHeadphones].length + 1;
    i++
  ) {
    cart[i] = 0;
  }
  return cart;
}

const allItems = [...data.headphones, ...data.wirelessHeadphones];

const initialState = {
  amountOfGoods: 0,
  totalCost: 0,
  cartItems: getDefaultCart(),
  language: "rus",
};

function reducer(state, action) {
  switch (action.type) {
    case "addToCart": {
      const add = (prevItems, itemId) => {
        return { ...prevItems, [itemId]: prevItems[itemId] + 1 };
      };

      return {
        ...state,
        amountOfGoods: state.amountOfGoods + 1,
        totalCost: state.totalCost + action.payload.price,
        cartItems: add(state.cartItems, action.payload.id),
      };
    }
    case "removeFromCart": {
      const remove = (prevItems, itemId) => {
        return { ...prevItems, [itemId]: prevItems[itemId] - 1 };
      };

      return {
        ...state,
        amountOfGoods: state.amountOfGoods - 1,
        totalCost: state.totalCost - action.payload.price,
        cartItems: remove(state.cartItems, action.payload.id),
      };
    }

    case "deleteItemCompletely": {
      const deleteItem = (prevItems, itemId) => {
        return { ...prevItems, [itemId]: 0 };
      };

      return {
        ...state,
        amountOfGoods: state.amountOfGoods - state.cartItems[action.payload.id],
        totalCost:
          state.totalCost -
          state.cartItems[action.payload.id] * action.payload.price,
        cartItems: deleteItem(state.cartItems, action.payload.id),
      };
    }

    case "changeLanguage": {
      return {
        ...state,
        language: action.payload,
      };
    }

    default: {
      throw new Error("Unkown");
    }
  }
}

function App() {
  const [{ amountOfGoods, totalCost, cartItems, language }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
    });
  }, []);

  return (
    <div className="app">
      <Header amountOfGoods={amountOfGoods} />

      <Routes>
        <Route index element={<Catalog dispatch={dispatch} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              allItems={allItems}
              dispatch={dispatch}
              totalCost={totalCost}
            />
          }
        />
      </Routes>

      <Footer language={language} dispatch={dispatch} />
    </div>
  );
}

export default App;
