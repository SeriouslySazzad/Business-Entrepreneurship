import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let selectedPerson = [];
    for(const person of cart){
        total = total + person.salary;
        selectedPerson = selectedPerson + ' ' + person.name;
    }
    return (
        <div className='cart'>
            <h3>Person Added : {props.cart.length} </h3>
            <h3>Total Net-Worth : ${total}</h3>
            <p>{selectedPerson} </p>
        </div>
    );
};

export default Cart;