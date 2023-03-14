import Link from 'next/link'

import '../styles/ProblemList.css'

import Bar from '../components/Bar'
import Footer from '../components/Footer'

export default function ProblemList() {
    return (
        <div>
            <header>
                <Bar />
            </header>
            <div className="nav">
                <div className="left">
                    <button><b>글쓰기</b></button>
                </div>
                <div className="right">
                    <button><b>문제 만들기</b></button>
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
                        <td><Link href="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link href="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr>
                    <tr>
                        <td>골드 1</td>
                        <td><Link href="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link href="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link href="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link href="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link href="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link href="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link href="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link href="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link href="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link href="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link href="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link href="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link href="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버 5</td>
                        <td><Link href="/problems/1">시혁이의 초시계</Link></td>
                        <td>언어</td>
                    </tr><tr>
                        <td>골드 1</td>
                        <td><Link href="/problems/1">주차장</Link></td>
                        <td>사칙연산</td>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>
    )
}
