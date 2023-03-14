import Link from 'next/link'

import '../styles/Bar.css'
import logo from '../images/logo3.png'
import exon from '../images/exon.png'

export default function Bar() {
    return (
        <div>
            <div className="bar">
                <div className="left">
                    <a href="/">
                        <img src={logo.src} alt="logo" width="50px"/>
                    </a>
                </div>
                <div className="right">
                    <Link href="/" className="link">메인</Link>
                    <Link href="/problems" className="link">문제</Link>
                    <Link href="/users/exon">
                        <img className="profile" src={exon.src} alt="profile" width="32px"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
