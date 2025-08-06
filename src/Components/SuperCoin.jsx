import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = React.useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity));

    useEffect( () => {
        if (totalAmount >= 100 && totalAmount < 200) {
            setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
            setSuperCoins(20);
        } else if (totalAmount >= 300) {
            setSuperCoins(30);
        } else {
            setSuperCoins(0);
        }
    }, [totalAmount]);

}