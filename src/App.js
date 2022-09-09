import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            {/* BEM */}
            <div className='App'>
                <Routes>
                    <Route
                        path='/checkout'
                        element={
                            <>
                                <Header />
                                <h1>I am a checkout</h1>
                            </>
                        }
                    />
                    <Route
                        path='/'
                        element={
                            <>
                                <Header />
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
