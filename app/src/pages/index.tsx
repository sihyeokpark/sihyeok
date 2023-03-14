import Bar from '../components/Bar'
import Footer from '../components/Footer'

import styles from '@/styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.root}>
            <header>
                <Bar />
            </header>
            <div className={styles.banner}>
                <h1>SIHYEOK</h1>
                <p>Made by <a href="https://github.com/1-EXON">exon</a></p>
            </div>
            <section>
                <div className="main">
                    <h1><span className="highlight"><b>모두가 문제를 내는</b></span></h1>
                    <h1><span className="highlight"><b className="gradient">사고·창의력 문제 사이트</b></span></h1>
                    <p><a href="/">SIHYEOK</a>은 사고·창의력 문제를 풀고 만들 수 있게 만들어진 프로젝트입니다.</p>
                    <button>지금 시작하기</button>
                </div>
                <div className="ranking">
                    <h1>인기 문제</h1>
                    <div className="box">
                        <h1>박시혁의 문제</h1>
                        <p>사람 5명이 있고 버스 5대가 있다. 어쩌고는 저쩌고고 이거는 저거다. 그러므로 이건 이게 아니다. 하지만 난 모르겠다.</p>
                    </div>
                </div>
                <Footer />
            </section>
            
        </div>
    )
}
