import '../css/home.css'
import { useParams } from 'react-router-dom'

import Bar from '../components/bar'

export default function User() {
    let { id } = useParams()
    return (
        <div>
            <header>
                <Bar />
            </header>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
        </div>
    )
}
