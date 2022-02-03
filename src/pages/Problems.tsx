import '../css/Problems.css'

import Bar from '../components/Bar'

export default function Problems() {
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
                        <td>골드1</td>
                        <td>주차장</td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버3</td>
                        <td>9999999</td>
                        <td>한자</td>
                    </tr>
                    <tr>
                        <td>골드1</td>
                        <td>주차장</td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버3</td>
                        <td>9999999</td>
                        <td>한자</td>
                    </tr>
                    <tr>
                        <td>골드1</td>
                        <td>주차장</td>
                        <td>사칙연산</td>
                    </tr>
                    <tr>
                        <td>실버3</td>
                        <td>9999999</td>
                        <td>한자</td>
                    </tr>
                </table>
            </div>
            
        </div>
    )
}
