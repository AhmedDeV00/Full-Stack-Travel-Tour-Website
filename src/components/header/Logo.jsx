import React from 'react'
import DubaiLogo from "../../images/logo.png"

function Logo() {
    return (
        <div>
            <div className="logo">
                <img src={DubaiLogo} alt="dubai-icon" className="logo-img" />
                <div className="logo-text">
                    <b>DUBAI</b>
                    <b>DESERT</b>
                    <b>SAFARI</b>
                </div>
            </div>
        </div>
    )
}

export default Logo