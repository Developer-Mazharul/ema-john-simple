import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    const reviewItemStyle={
        borderBottom: '1px solid gray',
        marginBottom: '5px',
        paddingBotton: '5px',
        marginLeft: '200px'
    };
    return (
        <div style={reviewItemStyle} className="review-item">
            <h2 className="product-name">{name}</h2>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;