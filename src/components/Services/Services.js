import React from 'react';
import './Services.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [ services, setServices ] = useState([])
    
    useEffect(() => {
        fetch('./FakeData.json')
            .then(res => res.json())
        .then(data => setServices(data))
   },[])

    return (
        <div>
            <h1> Our Service</h1>
            <div className="row gy-4 m-5">
                  {
                    services.map(service => <Service
                        key={ service.id }
                        service={service}
                    ></Service>)
                   }
            </div>
        </div>
    );
};

export default Services;