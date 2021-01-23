import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { UseStateValue } from '../../StateProvider';

function header() {

    const [{ basket }] = UseStateValue();

   //console.log(basket);

    return (
        <nav className="header">

            {/* Logo on the left */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>

            {/* Logo on the left */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            {/* 3 links */}
            <div className="header__nav">

                {/* 1 link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Manu</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2 link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3 link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4 link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
            


        </nav>
    )
}

export default header;
