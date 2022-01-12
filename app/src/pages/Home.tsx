import '../css/App.css'
import '../css/Home.css'

import Bar from '../components/Bar'

export default function Home() {
    return (
        <div className="root">
            <header>
                <Bar />
            </header>
            <div className="header">
                <h1>SIHYEOK</h1>
                <p>Made by <a href="https://github.com/1-EXON">exon</a></p>
            </div>
            <div className="main">
                <h1>모두가 문제를 내고</h1>
                <h1>풀 수 있는 창의력 문제 사이트</h1>
                <p><a href="">SIHYEOK</a> 은 창의력 문제를 풀고 만들 수 있게 만들어진 프로젝트입니다.</p>
                <button>지금 시작하기</button>
            </div>
            <div className="ranking">
                <h1>인기 문제</h1>
                <div className="box">
                    <h1>버스 문제</h1>
                </div>
            </div>
            <footer>
                <div className="footer">
                    <p>푸터푸터푸터</p>
                </div>
            </footer>
        </div>
    )
}
