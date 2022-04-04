import '../css/Users.css'
import { useParams } from 'react-router-dom'

import Bar from '../components/Bar'
import logo from '../images/exon.png'

export default function User() {
    let { id } = useParams()
    return (
        <div>
            <header>
                <Bar />
            </header>
            <div className="user">
                <img src={logo} alt={id} height="100px"/>
                <h1 className="name">{id}</h1>
            </div>
        </div>
    )
}
