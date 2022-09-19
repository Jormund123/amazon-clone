import React, { useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };
    return (
        <div data-aos='fade-down' className='header'>
            <Link to='/'>
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
            </Link>
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon'></SearchIcon>
            </div>
            <div className='header__nav'>
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>{user ? `Hello, ${user?.email}` : "Hello Guest"} </span>
                        <span className='header__optionLineTwo'>{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
