import styles from "../styles/Method.module.css";
import designprocess from "../assets/designprocess.png";
import designsprint from "../assets/designsprint.png";

function Method() {
    return (
        <section className={styles.method}>
            <h1>Design Method</h1>
            <p>
                My design process is similar to the Double Diamond design model, where the design process is divided in 4 categories of Discover, Define, Develop, Deliver. Over the years I've found the process isn't really split into 4 sections, and have instead adapted it to be more like an infinity loop with lots of back and forth to improve upon the solution.
            </p>
            <img src={designprocess} className={styles.methodImg} alt="OANDA metrics" />
            <p>
                This idea of an infinity design process also branched off into how I work across teams. It's very important to me to have alignment and ensure design, engineering, and product management are all connected and involved in the process. This ensures we're all working together towards the same goal and vision. 
            </p>

            <h2>Design Sprints</h2>
            <p>
                One of the key things I enjoy when being a part of a team is doing Design Sprints together. The design sprints are like an accelerated design process done in a week. As a manager, we held Design Sprints every week that anybody in the company can join. The process and days are detailed below with the 3 requirements being:
            </p>
            <ul>
                <li>1. Everyone posted ideas and features that they wanted to implemented</li>
                <li>2. The idea has to be feasible and can be done in a week</li>
                <li>3. If successful during user testing, it'll be implemented into the app!</li>
            </ul>
            <img src={designsprint} className={styles.methodImg} alt="OANDA metrics" />
            
        </section>
    );
}

export default Method;