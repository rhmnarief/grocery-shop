import React, { createContext, useReducer } from "react";
import { BrowserRouter, Switch, Route, Swtich } from "react-router-dom"

import Homepage from "./Function/Homepage";
import ProductPage from "./Function/ProductPage";
import HomeAdmin from "./Function/HomeAdmin";
import EditProduct from "./Function/EditProduct";
import TambahProduk from "./Function/TambahProduk";
import Login from "./Function/Login";
import DirectPage from "./Function/DirectPage";

export const AuthContext = createContext()

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null,
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
          <Route exact path='/direct' component={DirectPage} />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/admin' component={HomeAdmin} />

          <Route exact path='/tambah-produk' component={TambahProduk} />
          <Route exact path='/edit-produk' component={EditProduct} />

          <Route exact path='/product/:id' component={ProductPage} />


        </AuthContext.Provider>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
