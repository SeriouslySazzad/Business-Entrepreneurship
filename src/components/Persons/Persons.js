import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Person from '../Person/Person';
import './Persons.css'

const Persons = () => {
    const [businessPersons, setBusinessPersons] = useState([]);
    const [cart, setCart] = useState([])

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    useEffect(() => {
        fetch('./buisnessman.JSON')
            .then(res => res.json())
            .then(data => setBusinessPersons(data))
    }, [])

    const handleAddToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart)
    }
    return (
        <div className="persons-container">
            <div className="person-container">
                {
                    businessPersons.map(person => <Person
                        key={person.key}
                        person={person}
                        handleAddToCart={handleAddToCart}
                    >
                    </Person>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <button className='buy-now-btn'>{element} Buy Now</button>
            </div>
        </div>
    );
};

export default Persons;