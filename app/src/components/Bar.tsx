import { Link } from "react-router-dom"

import '../css/bar.css'
import logo from '../images/logo3.png'

function Bar() {
    return (
        <div className="bar">
            <div className="left">
                <img src={logo} alt="logo" width="50px"/>
            </div>
            <div className="right">
                <Link to="/" className="link">홈</Link>
                <Link to="/problems" className="link">문제</Link>
            </div>
        </div>
    )
}

export default Bar;
