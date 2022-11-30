import '../css/Problems.css'
import { useParams } from 'react-router-dom'

import Bar from '../components/Bar'

export default function User() {
    let { id } = useParams()
    let name: string = '문제'
    return (
        <div>
            <header>
                <Bar />
            </header>
            <div className="problem">
                <div className="nav">
                    <div className="left">
                        <button className="option">제출</button>
                        <button className="option">제출 현황</button>
                        <button className="option">질문</button>
                    </div>
                    <div className="right">
                        <button className="option">제출</button>
                        <button className="option">제출</button>
                    </div>
                </div>
                <h1 className="name"><b>{id}</b> {name}</h1>
            </div>
        </div>
    )
}
