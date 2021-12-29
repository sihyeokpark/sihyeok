import { Link } from "react-router-dom"

import '../css/bar.css'
import logo from './logo3.svg'

function Bar() {
    return (
        <div className="bar">
            <img src={logo} alt="logo" width="250px"/>
            
            <Link to="/" className="link">홈</Link>
            <Link to="/problems" className="link">문제</Link>
            
        </div>
    )
}

export default Bar;
