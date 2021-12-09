import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCountryName } from '../../redux/countrySlice';
import "./country.css"
const Country = () => {
    const [country, setCountry] = useState([]);


    const dispatch = useDispatch()

    useEffect(() => {
        axios(`https://covid19.mathdro.id/api/countries`)
            .then((res) => res.data)
            .then((data) => setCountry(data.countries))

    }, [])



    const handleChange = (countryName) => {
        dispatch(getCountryName(countryName))
    }

    return (
        <div className="country_picker country_picker2">
            <div className="countryInput countryBase countryUnderline">
                <select className="select" onChange={(e) => handleChange(e.target.value)}>
                    <option>Global</option>
                    {
                        country.map((item, i) => (
                            <option key={i} value={item.name}>{item.name}</option>
                        ))

                    }


                </select>
                <svg className="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M 7 10 l 5 5 l 5 -5 Z"></path>
                </svg>
            </div>

        </div>
    )
}

export default Country
