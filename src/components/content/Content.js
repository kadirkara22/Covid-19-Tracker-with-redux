import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Active from './Active'
import Deaths from './Deaths'
import Infected from './Infected'
import Recovered from './Recovered'

const Content = () => {
    const country = useSelector(state => state.covid.country)
    const [loading, setLoading] = useState(true);
    const [countryData, setCountryData] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
        axios(`https://covid19.mathdro.id/api/countries/${country}/confirmed`)
            .then((res) => res.data)
            .then((data) => setCountryData(data))

    }, [country])


    return (
        <div className="cards_container">
            <div className="cards">
                <Infected countryData={countryData} country={country} />
                <Recovered countryData={countryData} country={country} />
                <Deaths countryData={countryData} />
                <Active countryData={countryData} />
            </div>
        </div>
    )
}

export default Content
