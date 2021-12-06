import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./country.css"
const Country = () => {
    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`https://covid19.mathdro.id/api/countries`)
            .then((res) => res.data)
            .then((data) => setCountry(data.countries))

    }, [])

    console.log(country)
    return (
        <div className="country_picker country_picker2">
            <div className="countryInput countryBase countryUnderline">
                <select className="select">

                    {/*    {
                        country.map(item => (
                            <option value={item.name}></option>
                        ))

                    } */}


                </select>
                <svg className="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M 7 10 l 5 5 l 5 -5 Z"></path>
                </svg>
            </div>

        </div>
    )
}

export default Country
