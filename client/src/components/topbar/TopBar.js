import React from 'react'
import "./topbar.css"
export default function TopBar() {
    return (
        <div className="top">
            <div className="topleft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                </div>
            <div className="topcenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topright">
                <img className="topImg" src="https://lh3.googleusercontent.com/proxy/oGxPS-ziteAeRtMlfadbiF8oRAjcHIdE1Awq2uJlRctiU1M8fAGcTlBaNg9oTXwr3enrI2zlR9coOzyUAUn3PN0HW1G1F215NvBQGwulu-UL3ELZ3PCk" alt=" Profile Picture"/>
                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}
