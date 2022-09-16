import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log("The user is ", authUser);
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);
    return (
        <BrowserRouter>
            {/* BEM */}
            <div className='App'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path='/checkout'
                        element={
                            <>
                                <Header />
                                <Checkout />
                            </>
                        }
                    />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
