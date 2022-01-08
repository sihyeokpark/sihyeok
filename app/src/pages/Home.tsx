import '../css/App.css'
import '../css/Home.css'

import Bar from '../components/Bar'

export default function Home() {
    return (
        <header>
            <Bar />
            <div className="header">
                <h1>SIHYEOK</h1>
                <p>Made by exon</p>
            </div>
        </header>
    )
}
