import React from 'react'
import Active from './Active'
import Deaths from './Deaths'
import Infected from './Infected'
import Recovered from './Recovered'

const Content = () => {
    return (
        <div className="cards_container">
            <div className="cards">
                <Infected />
                <Recovered />
                <Deaths />
                <Active />
            </div>
        </div>
    )
}

export default Content
