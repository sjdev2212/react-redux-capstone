import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

 const Cities = () => {
    const allCities = useSelector((state) => state.citiesReducer)
    return (
     <section>
         
             {allCities.map((city) => <div key={city.key}>
            <h4>{city.name}</h4>
            <p>{city.temp}</p>
            <p>{city.text}</p>
        


             </div>)}

<Link to="/" >Back Home</Link>

     </section>
    )
}
export default Cities