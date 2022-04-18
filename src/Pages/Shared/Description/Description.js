import React, { useEffect, useState } from 'react';
import './Description.css'
import ServiceDescription from '../ServiceDescription/ServiceDescription';

const Description = (props) => {
    // const {name, }
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h2 className='text-center title my-5'>Courses and Mentorship</h2>
            <div className='services-container'>
                {
                    services.map(service => <ServiceDescription
                        key={service.id}
                        service={service}
                    ></ServiceDescription>)
                }
            </div>
        </div>
    );
};

export default Description;