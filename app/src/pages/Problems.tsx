import styles from '@/styles/Problems.module.css'

import Bar from '../components/Bar'

export default function User() {
    // let { id } = useParams()
    let name: string = '문제'
    return (
        <div>
            <header>
                <Bar />
            </header>
            <div className={styles.problem}>
                <div className={styles.nav}>
                    <div className={styles.left}>
                        <button className={styles.option}>제출</button>
                        <button className={styles.option}>제출 현황</button>
                        <button className={styles.option}>질문</button>
                    </div>
                    <div className={styles.right}>
                        <button className={styles.option}>제출</button>
                        <button className={styles.option}>제출</button>
                    </div>
                </div>
                <h1 className={styles.name}><b>{3}</b> {name}</h1>
            </div>
        </div>
    )
}
