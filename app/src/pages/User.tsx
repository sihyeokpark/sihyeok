import '../styles/Users.css'

import Bar from '../components/Bar'
import logo from '../images/exon.png'

export default function User() {
    let id = 'wefew'
    // let { id } = useParams()
    return (
        <div>
            <header>
                <Bar />
            </header>
            <div className="user">
                <img src={logo.src} alt={id} height="100px"/>
                <h1 className="name">{id}</h1>
            </div>
        </div>
    )
}
