import { Link } from "react-router-dom"

import '../css/bar.css'

function Bar() {
    return (
        <div className="bar">
            <img src="https://d2gd6pc034wcta.cloudfront.net/images/logo@2x.png" width="250px"/>
            
            <Link to="/" className="link">홈</Link>
            <Link to="/problems" className="link">문제</Link>
            
        </div>
    )
}

export default Bar;
