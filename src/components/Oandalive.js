import styles from "../styles/Oandalive.module.css";
import oandametricsgif from "../assets/oanda_metrics.gif";
import oandametrics1 from "../assets/oanda_metrics1.png";
import oandametrics2 from "../assets/oanda_metrics2.png";
import oandametrics3 from "../assets/oanda_metrics3.png";
import oandametrics4 from "../assets/oanda_metrics4.png";
import oandametrics5 from "../assets/oanda_metrics5.png";

function Oandalive() {
    return (
        <section className={styles.oandalive}>
            <h1>OANDA Live</h1>
            <p>
                As a UX Manager at OANDA, one of the key things I wanted my team to get right was truly understanding our customers and how they use our applications. We were able to gather key metrics using mixpanel, a tracking tool, where we can identify usage patterns, see where our core users were coming from, and which platform they were using the most.
                We took it a step further and projected live data that was updated daily on screens throughout the office.
            </p>
            <img src={oandametricsgif} className={styles.oandametricsgif} alt="OANDA metrics" />
            <img src={oandametrics1} className={styles.oandametricsImg} alt="OANDA metrics" />
            <img src={oandametrics2} className={styles.oandametricsImg} alt="OANDA metrics" />
            <img src={oandametrics3} className={styles.oandametricsImg} alt="OANDA metrics" />
            <img src={oandametrics4} className={styles.oandametricsImg} alt="OANDA metrics" />
            <img src={oandametrics5} className={styles.oandametricsImg} alt="OANDA metrics" />
        </section>
    );
}

export default Oandalive;