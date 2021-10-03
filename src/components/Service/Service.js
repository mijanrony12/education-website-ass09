import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const { image , name, detials, price} = service

    return (
        <div className="col-md-4">
                    <div className="card">
                            <img src={ image } alt=" imgae" />
                <h2>Name: <span>{ name }</span></h2>
                <h4>Price (tk)= { price}</h4>
                <p> <b>course Details:-</b>  {detials}</p>
                   </div>
         </div>
    );
};

export default Service;