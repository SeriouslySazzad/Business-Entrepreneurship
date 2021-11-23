import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = (props) => {
    
    const { name, img, country, role, age, salary } = props.person;

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='single-person'>
            <div className="person-details">
                <img src={img} alt="" />
                <p className='name'>Name : {name}</p>
                <p>Role : {role}</p>
                <p>Country : {country}</p>
                <p>Age : {age}</p>
                <p>Net-Worth : ${salary}</p>
                <button 
                className='cart-btn'
                onClick={ () => props.handleAddToCart(props.person)}
                >{element} Add to Cart</button>
                <div className="social-icon">
                        <a href="/facebook"><i className="fab fa-facebook"></i></a>
                        <a href="/instagram"><i className="fab fa-instagram"></i></a>
                        <a href="/twitter"><i className="fab fa-twitter-square"></i></a>
                        <a href="/github"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Person;