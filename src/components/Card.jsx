import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.text}</p>
                <button type="button" className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    );
};

export default Card;