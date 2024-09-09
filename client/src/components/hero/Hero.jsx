import React from 'react'
import "./hero.css"

function Hero() {
    return (
        <div className='hero-header'>
            <div className="search-box">
                <div className="input-wrapper">
                    <i className='bi bi-search'></i>
                    <input className='search-box-input' type="search" name="search" id="search" placeholder='What are you looking for ?' />
                </div>
                <button className='search-box-btn'>Search</button>
            </div>
            <div className="hero-header-title">
                <h3>Dubai</h3>
                <h1>Safaris</h1>
            </div>
        </div>
    )
}

export default Hero