import { Link } from "react-router-dom"

import '../css/Bar.css'
import logo from '../images/logo3.png'
import exon from '../images/exon.png'

export default function Bar() {
    return (
        <div>
            <div className="bar">
                <div className="left">
                    <a href="/">
                        <img src={logo} alt="logo" width="50px"/>
                    </a>
                </div>
                <div className="right">
                    <Link to="/" className="link">메인</Link>
                    <Link to="/problems" className="link">문제</Link>
                    <Link to="/users/exon">
                        <img className="profile" src={exon} alt="profile" width="32px"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
