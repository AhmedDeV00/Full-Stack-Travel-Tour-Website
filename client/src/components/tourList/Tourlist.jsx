import React from 'react'
import "./tourList.css"
import TourItem from './TourItem';


function TourList({ tourList }) {

    console.log(tourList);
    return (
        <div className='tour-list'>
            {Array.isArray(tourList) && tourList.map((item) => (
                <TourItem item={item} key={item._id} />
            ))}
        </div>
    )
}

export default TourList