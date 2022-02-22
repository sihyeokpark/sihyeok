import '../css/problems.css'
import { useParams } from 'react-router-dom'

import Bar from '../components/bar'

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
                    <button>제출</button>
                    <button>제출 현황</button>
                    <button>질문</button>
                    <button>제출</button>
                    <button>제출</button>
                </div>
                <h1 className="name"><b>{id}</b> {name}</h1>
            </div>
        </div>
    )
}
