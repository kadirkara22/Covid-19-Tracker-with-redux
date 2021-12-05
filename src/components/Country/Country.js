import React from 'react'
import "./country.css"
const Country = () => {
    return (
        <div className="country_picker">
            <div className="countryControl">
                <select className="select">
                    <option>Global</option>
                    <option>Turkey</option>
                </select>

            </div>

        </div>
    )
}

export default Country
