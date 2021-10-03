import React from 'react';
import './Services.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import useServices from '../../Hooks/useServices';

const Services = () => {
    
    // get data
   const [services, setServices]=useServices()

    return (
        <div>
            <h1 className="text-center mt-4  service"> Our Service</h1>
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