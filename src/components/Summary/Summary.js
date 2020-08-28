import React from 'react';
import './Summary.css'
import button from 'react-bootstrap/Button'

const Summary = (props) => {
    const cart = props.summary;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const subject = cart[i];
        total = total + subject.price;
        
    }
    const tax = (total /90).toFixed(2);
    const grandTotal = (total + Number(tax))
    const formatNumber = num =>{
        const precision = num.toFixed(2)
        return Number(precision);
    }
    return (
        <div>
            <h3 className='head'>Purchased Course Summary</h3>
            <p>Selected Course:{cart.length}</p>
            <p>Course Price:{formatNumber(total)}</p>
             <p><small>Tax:{tax}</small></p> 
            <h4>Total Cost:{grandTotal}</h4>  
            <button bsStyle="danger" className='btn'>Review course</button> 
     

        </div>
    );
};

export default Summary;