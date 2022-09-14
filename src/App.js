import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";

function App() {
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
