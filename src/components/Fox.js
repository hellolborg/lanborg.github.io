import styles from "../styles/Fox.module.css"
import sytycd from "../assets/sytycd.gif";
import sytycdpromos from "../assets/sytycdpromos.png"

function Fox() {
    return (
        <section className={styles.fox}>
            <div className={styles.controls}>
                <a href="./cbc">&#60; Previous</a>
                <a href="./pantryyumyums">Next &#62;</a>
            </div>
            <section className={styles.foxFlex}>
                <div className={styles.foxIntro}>
                    <h1>Sr Designer, FOX</h1>
                    <h4>So You Think You Can Dance Homepage</h4>
                    <p>As a Senior Designer on this project, I was inspired by the flow and movement of the dancers on the show. Using the photography we had of the dancers, I incorporated the imagery to interact with the page elements. It really helped make the homepage come alive.​​​​​​</p>
                </div>
                <img src={sytycd} className={styles.sytycd} alt="CBC Player" />
            </section>
            <h3>So You Think You Can Dance Promos</h3>
            <img src={sytycdpromos} className={styles.sytycdImg} alt="CBC Player Guide" />
        </section>
    );
}

export default Fox;