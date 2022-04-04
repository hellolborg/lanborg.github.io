import styles from "../styles/Header.module.css";

function Header() {
    return (
        <header>
            <div className={styles.flexHeader}>
                <div className={styles.nameFlex}>
                    <a href="./portfolio">
                        <h1>LAN <span>BORG</span></h1>
                    </a>
                    <a href="./portfolio">
                        <h5>UX LEAD DESIGNER & ENGINEER</h5>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><a href="./portfolio">PORTFOLIO</a></li>
                        <li><a href="./about">ABOUT</a></li>
                    </ul>
                </nav>
            </div>
            <hr className={styles.dotted2}></hr>
        </header>
    );
}

export default Header;
