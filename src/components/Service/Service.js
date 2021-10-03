import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const { image , name} = service

    return (
        <div className="col-md-4">
                    <div className="card">
                <img src={ image } alt=" imgae" />
                <h2>Name: { name}</h2>
                   </div>
         </div>
    );
};

export default Service;