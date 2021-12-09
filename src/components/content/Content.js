import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showCountry, showGlobal } from '../../redux/countrySlice'
import Loading from '../Loading'
import Active from './Active'
import Deaths from './Deaths'
import Infected from './Infected'
import Recovered from './Recovered'

const Content = () => {
    const global = useSelector(state => state.covid.global)
    const confirmed = useSelector(state => state.covid.confirmed)
    const death = useSelector(state => state.covid.death)
    const recovered = useSelector(state => state.covid.recovered)

    const confirmed2 = useSelector(state => state.covid.confirmed2)
    const death2 = useSelector(state => state.covid.death2)
    const recovered2 = useSelector(state => state.covid.recovered2)

    const lastUpdate = useSelector(state => state.covid.lastUpdate)
    const countryName = useSelector(state => state.covid.country)
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        axios("https://covid19.mathdro.id/api")
            .then((res) => res.data)
            .then((data) => dispatch(showGlobal([data])))
            .finally(() => setLoading(false))
    }, [dispatch])

    useEffect(() => {
        axios(`https://covid19.mathdro.id/api/countries/${countryName}`)
            .then((res) => res.data)
            .then((data) => console.log([data]))
    }, [dispatch, countryName])

    console.log(confirmed2)

    const date = new Date(lastUpdate);
    const dateTarih = date.toDateString();
    const saat = date.toLocaleTimeString()

    const active = Number(confirmed) - Number(death)

    return (
        <>
            {
                loading ? <div><Loading /></div>
                    :
                    <div className="cards_container">
                        <div className="cards">
                            <Infected confirmed={confirmed} dateTarih={dateTarih} saat={saat} />
                            <Recovered recovered={recovered} dateTarih={dateTarih} saat={saat} />
                            <Deaths death={death} dateTarih={dateTarih} saat={saat} />
                            <Active active={active} dateTarih={dateTarih} saat={saat} />
                        </div>
                    </div>

            }
        </>
    )
}

export default Content
