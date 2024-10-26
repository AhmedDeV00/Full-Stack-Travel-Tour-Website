import React from 'react'
import Rating from './Rating'
import "./tourList.css"
import { Link } from "react-router-dom"
function TourItem({ item }) {
    return (

        <div className='tour-item'>
            <img src={item.image} alt="safari-tour" className='tour-item-img' />
            <span className="tour-item-label">ADVENTURE</span>
            <div className="tour-item-body">
                <div className="tour-item-title">{item.title}</div>
                <div className="tour-item-duration">{item.duration} <span>Pickup available</span> <i className="bi bi-dot"></i></div>
                <Rating rating={item.rating} reviews={item.reviews} />
                <div className="tour-item-price">
                    <strong>from ${item.priceFrom}</strong> per Person
                </div>
                <Link to={`/tour/${item._id}`} item={item} className="tour-item-link">
                    See More
                </Link>
            </div>
        </div>

    )
}

export default TourItem