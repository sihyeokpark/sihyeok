export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <p>made by <a href="https://github.com/1-EXON">exon</a></p>
                <br></br>
                <p>powered by <a href='https://exon.kr'>exon.kr</a></p>
                <p>© {(new Date()).getFullYear()} All Rights Reserved.</p>
            </div>
        </footer>
    )
}