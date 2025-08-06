import React from 'react';
import {useSelector} from "react-redux";

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = React.useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);

}