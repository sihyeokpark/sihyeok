import '../css/home.css'

import Bar from '../components/bar'

export default function Home() {
    return (
        <div className="root">
            <header>
                <Bar />
            </header>
            <div className="banner">
                <h1>SIHYEOK</h1>
                <p>Made by <a href="https://github.com/1-EXON">exon</a></p>
            </div>
            <div className="main">
                <h1><b>모두</b>가 문제를 내고</h1>
                <h1>푸는 <b>창의력 문제 사이트</b></h1>
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
                    <p>made by <a href="https://github.com/1-EXON">exon</a></p>
                    <br></br>
                    <p>powered by <a href='https://exon.kr'>exon.kr</a></p>
                    <p>© {(new Date()).getFullYear()} All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}
