import React, { createContext, useReducer } from "react";
import { BrowserRouter , Switch, Route, Swtich } from "react-router-dom"

import Homepage from "./Function/Homepage";
import ProductPage from "./Function/ProductPage";
import HomeAdmin from "./Function/HomeAdmin";
import EditProduct from "./Function/EditProduct";
import TambahProduk from "./Function/TambahProduk";
import Login from "./Function/Login";
import DirectPage from "./Function/DirectPage";
import Profile from "./Function/Profile";
import Checkout from "./Function/Checkout";
import FunctionCartPage from "./Class/FunctionCartPage";
import EditProfile from "./Function/EditProfile";
import Success from "./Function/Success";
import TransactionDetails from "./Function/TransactionDetails";

export const AuthContext = createContext()

const initialState = {
  isAuthenticated: false,
  id: null,
  user: null,
  token: null,
  role: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("id", JSON.stringify(action.payload.id))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        id: action.payload.id,
        role: action.payload.role
      }
    case "LOGOUT":
      window.location.replace("http://localhost:3000/login")
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        id: null,
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={DirectPage} />
          <Route exact path='/home' component={Homepage} />
          <Route exact path='/admin' component={HomeAdmin} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/profile/:edit' component={EditProfile} />
          <Route exact path='/transaction/:id_invoice' component={TransactionDetails} />

          <Route exact path='/tambah-produk' component={TambahProduk} />
          <Route exact path='/edit-product' component={EditProduct} />

          <Route exact path='/product/:id' component={ProductPage} />
          <Route exact path='/keranjang' component={FunctionCartPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/success' component={Success} />

        </AuthContext.Provider>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
