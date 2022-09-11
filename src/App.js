import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";

function App() {
    return (
        <BrowserRouter>
            {/* BEM */}
            <div className='App'>
                <Header />
                <Routes>
                    <Route
                        path='/checkout'
                        element={
                            <>
                                <Checkout />
                            </>
                        }
                    />
                    <Route
                        path='/'
                        element={
                            <>
                                <Home />
                            </>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
