import styles from "../styles/Alias.module.css";
import alias from "../assets/portfolio3_comingsoon.png"
import communication from "../assets/communication.png";
import chart from "../assets/chart.png";

function Alias() {
    return (
        <section className={styles.alias}>
            <div className={styles.controls}>
                <a href="./oandalive">&#60; Previous</a>
                <a href="./cbc">Next &#62;</a>
            </div>
            <section className={styles.aliasFlex}>
                <div className={styles.aliasIntro}>
                    <h1>Sr UX Designer/Engineer, Autodesk</h1>
                    <h4>Alias Modernization Project</h4>
                    <p>
                        Alias is an exclusive 3D Software program that is used to model surfaces of automobiles, devices, and any product. The software is almost 40 years old with over 400 tools and millions of lines of code, and the product itself shows its age. I currently have the pleasure of being apart of the modernization team that's taking on the challenge to bring this up to date.
                    </p>
                    <p>
                        Due to the project not being available to the public yet, I'm unable to share the designs. Instead I can describe the workflow I've implemented that has dramatically improved our workflow.
                    </p>
                </div>
                <img src={alias} className={styles.aliasApp} alt="CBC Player" />
            </section>
            <h2>Working As One</h2>
            <p>
                The key initiative I'm leading is how we can improve our workflow by doing the UI design work directly in the source code. There's a lot that can get lost in translation when translating from design to development, and I've always had an interest in learning how to code. I created a proposal which was supported and approved by both engineering and design leaders. The goals and outcomes of the proposal were:
            </p>
            <ul>
                <li>• Provide the team with QT/QML training</li>
                <li>• Set up micro colloboration working sessions where we meet 20mins twice weekly to learn, debug, and ask questions.</li>
                <li>• Working with engineers to develop a styling framework in QML that will work for designers working in the source code</li>
            </ul>
            <img src={communication} className={styles.aliasImg} alt="Communication Error Image" />
            <h2>Results</h2>
            <p>
                Since implementing this new approach, we've seen a significant savings in time for both design and development:
            </p>
            <img src={chart} className={styles.aliasImg} alt="CBC Player Design" />
            <p>
                Being able to fill that gap has been very rewarding for both myself and the team. It’s been a huge learning curve but we found a lot of benefits:
            </p>
            <ul>
                <li>• UX Team has full control over the design in the source code</li>
                <li>• Built a frame work that’s easily understood and adaptable</li>
                <li>• Engineers are very happy because they prefer to work on infrastructure and technical debt</li>
                <li>• Overall better relationships and functioning between our teams</li>
            </ul>
            <p>
                Engineer and design are now closely intertwined. We work together and meet often, and because of that, there isn’t the typical silos between engineer and design.
            </p>
        </section>
    );
}

export default Alias;