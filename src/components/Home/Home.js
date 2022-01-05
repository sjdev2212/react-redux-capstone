import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getCities from '../../redux/Home/thunk/Apicall'
import { GetOneCity } from '../../redux/Home/actions/Actions';



 const Home = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allCities = useSelector((state) => state.citiesReducer)


    return (
      <section>
        <h1>Choose a City</h1>
            {allCities.map((m) => ( 
        <li key={m.key}>
          <p>{m.name}</p>
   
        <button type='button' onClick={()=> dispatch(GetOneCity(m.key))}><Link className="link" to="/cities">See More...</Link></button> 
        </li>
         )

            )}
          
      </section>
    )
}

export default Home;
