import styles from "../styles/Portfolio.module.css";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import portfolio5 from "../assets/portfolio5.png";
import portfolio6 from "../assets/portfolio6.png";


function Portfolio() {
    return (
        <section className={styles.portfolio}>
            <ul class={styles.portfolioFlex}>
                <li className={styles.portfolioImg}>
                    <a href="./fxtrade">
                        <img src={portfolio1} alt="fxTrade" class={styles.portfolioGallery} />
                    </a>
                    <div className={styles.portfolioName}>
                        <h4>fxTrade Mobile & Web App</h4>
                    </div>
                </li>
                <li className={styles.portfolioImg}>
                    <a href="./oandalive">
                        <img src={portfolio2} alt="OANDA Live" class={styles.portfolioGallery} />
                    </a>
                    <div className={styles.portfolioName}>
                        <h4>OANDA Live Research</h4>
                    </div>
                </li>
                <li className={styles.portfolioImg}>
                    <a href="./alias">
                        <img src={portfolio3} alt="Autodesk Alias" class={styles.portfolioGallery} />
                    </a>
                    <div className={styles.portfolioName}>
                        <h4>Autodesk Alias Modernization</h4>
                    </div>
                </li>
                <li className={styles.portfolioImg}>
                    <a href="./cbc">
                        <img src={portfolio4} alt="CBC" class={styles.portfolioGallery} />
                    </a>
                    <div className={styles.portfolioName}>
                        <h4>CBC Player</h4>
                    </div>
                </li>
                <li className={styles.portfolioImg}>
                    <a href="./fox">
                        <img src={portfolio5} alt="Fox So You Think You Can Dance" class={styles.portfolioGallery} />
                    </a>
                    <div className={styles.portfolioName}>
                        <h4>So You Think You Can Dance</h4>
                    </div>
                </li>
                <li className={styles.portfolioImg}>
                    <a href="./pantryyumyums">
                        <img src={portfolio6} alt="Pantry Yum Yums" class={styles.portfolioGallery} />
                    </a>
                    <div className={styles.portfolioName}>
                        <h4>Pantry Yum Yums React Project</h4>
                    </div>
                </li>
            </ul>
        </section >
    )
}

export default Portfolio;