import styles from "../styles/Cbc.module.css";
import cbc from "../assets/cbc.gif";
import cbcplayerguide from "../assets/cbcplayerguide.jpg";
import cbcplayerdesign from "../assets/cbcplayerdesign.jpg";

function Cbc() {
    return (
        <section className={styles.cbc}>
            <div className={styles.controls}>
                <a href="./alias">&#60; Previous</a>
                <a href="./fox">Next &#62;</a>
            </div>
            <section className={styles.cbcFlex}>
                <div className={styles.cbcIntro}>
                    <h1>UX Designer, Canada Broadcasting Company</h1>
                    <h4>CBC Video Player</h4>
                    <p>The Canadian Broadcasting Corporation is a broadcasting network in Canada. They offer programming and news throughout the country. Their mission is to inform, to reveal, to contribute to the understanding of issues of public interest.</p>
                    <p>As a User Experience Designer at CBC, I had the opportunity to design a new CBC Player homepage. I collaborated with stakeholders from various departments across CBC in television, radio, news and sports. From there, a design was created that can adapt to the various content within CBC.</p>
                </div>
                <img src={cbc} className={styles.cbcPlayer} alt="CBC Player" />
            </section>
            <h3>CBC Player Guidelines</h3>
            <p>I created guidelines and templates for the CBC design guidelines. The guidelines allowed other designers and developers to follow spacing, fonts, and components (promos, flags, headlines, etc).</p>
            <img src={cbcplayerguide} className={styles.cbcImg} alt="CBC Player Guide" />
            <h3>CBC Player Design</h3>
            <p>This example shows how the design can be adapted to any new content automatically when following and implementing the design according to the CBC Player design guidelines. </p>
            <img src={cbcplayerdesign} className={styles.cbcImg} alt="CBC Player Design" />
        </section>
    );
}

export default Cbc;