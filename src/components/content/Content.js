import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showGlobal } from '../../redux/countrySlice'
import Loading from '../Loading'
import Active from './Active'
import Deaths from './Deaths'
import Infected from './Infected'
import Recovered from './Recovered'

const Content = () => {

    const [loading, setLoading] = useState(true);


    const confirmed = useSelector(state => state.covid.confirmed)
    const death = useSelector(state => state.covid.death)
    const recovered = useSelector(state => state.covid.recovered)
    const countryName = useSelector(state => state.covid.country)

    const lastUpdate = useSelector(state => state.covid.lastUpdate)


    const dispatch = useDispatch();

    useEffect(() => {
        axios("https://covid19.mathdro.id/api")
            .then((res) => dispatch(showGlobal([res.data])))
            .finally(() => setLoading(false))
    }, [dispatch])

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
                            <Infected confirmed={confirmed} dateTarih={dateTarih} saat={saat} countryName={countryName} />
                            <Recovered recovered={recovered} dateTarih={dateTarih} saat={saat} countryName={countryName} />
                            <Deaths death={death} dateTarih={dateTarih} saat={saat} countryName={countryName} />
                            <Active active={active} dateTarih={dateTarih} saat={saat} countryName={countryName} />
                        </div>
                    </div>

            }
        </>
    )
}

export default Content
