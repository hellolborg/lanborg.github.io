import styles from "../styles/Oandalive.module.css";
import mixpanel2 from "../assets/mixpanel2.png";
import oandametricsgif from "../assets/oanda_metrics.gif";
import oandametrics1 from "../assets/oanda_metrics1.png";
import oandametrics2 from "../assets/oanda_metrics2.png";
import oandametrics3 from "../assets/oanda_metrics3.png";
import oandametrics4 from "../assets/oanda_metrics4.png";
import oandametrics5 from "../assets/oanda_metrics5.png";

function Oandalive() {
    return (
        <section className={styles.oandalive}>
            <div className={styles.controls}>
                <a href="./fxtrade">&#60; Previous</a>
                <a href="./alias">Next &#62;</a>
            </div>
            <div className={styles.oandaIntro}>
                <div>
                    <h1>OANDA Live</h1>
                    <p>As a UX Manager at OANDA, one of the key things I wanted my team to get right was truly understanding our customers and how they use our applications. We were able to gather key metrics using mixpanel, a tracking tool, where we can identify usage patterns, see where our core users were coming from, and which platform they were using the most.</p>
                    <h3>The Problem</h3>
                    <p>The issue I find with most research tools, especially for quantitative research is:</p>
                    <ul>
                        <li>• There tends to be an overwhelming amount of data</li>
                        <li>• Teams may not know how to interpret it or how to make use of it</li>
                        <li>• Data always changes and unless you're monitoring it, your team may also be out of sync with the latest usage patterns</li>
                    </ul>
                </div>
                <img src={mixpanel2} className={styles.mixpanel2} alt="OANDA metrics" />
            </div>
            <h3>The Solution</h3>
            <p>The solution I had to solve it was to create a custom program that will help us make sense of the data. Working with the engineering team, we created scripts to parse the data to show us the key information we wanted to learn.</p>
            <p>Instead of focusing on the 10,000+ users we had. We focused on the top 100 users that drove more then 80% of our revenue. We wanted to learn:</p>
            <ul>
                <li>• Where are users are coming from</li>
                <li>• What was their core usage patterns</li>
                <li>• What devices they were using</li>
                <li>• How they were placing trades on our app</li>
            </ul>
            <p>We then had that data feed into custom designed graphs that updated every 5-10 mins with the latest user information and patterns. We took it a step further and had that information broadcast on TV screens throughout the office. The great thing about OANDA was that people cared about the product and wanted to understand how our customers used the product, so having that information updated live and available for people was great and helped us all make a better product.</p>
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