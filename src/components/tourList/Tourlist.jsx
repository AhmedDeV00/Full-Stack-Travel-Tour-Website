import React from 'react'
import "./tourList.css"
import TourItem from './TourItem'

function TourList({ toursList }) {
    return (
        <div className='tour-list'>
            {toursList.map((item) => (
                <TourItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default TourList