import '../css/problemlist.css'

import Bar from '../components/bar'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'

export default function ProblemList() {
    return (
        <div>
            <header>
                <Bar />
            </header>
            <div className="nav">
                <div className="left">
                    <button>글쓰기</button>
                </div>
                <div className="right">
                    <button>문제 만들기</button>
                </div>
            </div>
            <div className='table'>
                <table>
                    <tr>
                        <th>난이도</th>
                        <th>문제</th>
                        <th>정보</th>
                    </tr>
                    <tr>
                        <td>골드 1</td>
                        <td><Link to="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link to="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr>
                    <tr>
                        <td>골드 1</td>
                        <td><Link to="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link to="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link to="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link to="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link to="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link to="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link to="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link to="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link to="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link to="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link to="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link to="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link to="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link to="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link to="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>
    )
}
