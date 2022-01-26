import { Link } from "react-router-dom"

import '../css/Bar.css'
import logo from '../images/logo3.png'

function Bar() {
    return (
        <div>
            <div className="bar">
                <div className="left">
                    <a href="/">
                        <img src={logo} alt="logo" width="50px"/>
                    </a>
                </div>
                <div className="right">
                    <Link to="/" className="link">홈</Link>
                    <Link to="/problems" className="link">문제</Link>
                </div>
            </div>
        </div>
    )
}

export default Bar;
