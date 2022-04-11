import styles from '../styles/About.module.css';
import lan from '../assets/lan.png';
import email from '../assets/emailIcon.svg';
import resume from '../assets/resumeIcon.svg';
import linkedin from '../assets/linkedInIcon.svg';
import resumePDF from '../assets/LAN-resume.pdf';

function About() {
    return (
        <section className={styles.about}>
            <div className={styles.aboutFlex}>
                <div class={styles.lan}>
                    <img src={lan} alt="Lan" className={styles.lanPhoto}/>
                    <div className={styles.contactFlex}>
                        <img src={email} alt="Email Icon" />
                        <a href="mailto:hello@lanborg.ca" className={styles.a}>hello@lanborg.ca</a>
                    </div>
                    <div className={styles.contactFlex}>
                        <img src={resume} alt="Resume Icon" />
                        <a href={resumePDF} className={styles.a}>Resume</a>
                    </div>
                    <div className={styles.contactFlex}>
                        <img src={linkedin} alt="LinkedIn Icon" />
                        <a href="https://www.linkedin.com/in/lanborg/" className={styles.a} target="_blank">LinkedIn</a>
                    </div>
                </div>
                <div class={styles.aboutContent}>
                    <h3 className={styles.h3}>Hi, I'm Lan. Thanks for dropping by!</h3>
                    <p>I have over 10+ years of experience as a designer and between 4-5 yrs experience leading a team as a UX Manager. My area of expertise include designing experiences for desktop software, mobile and web applications.</p>
                    
                    <p>I’m currently a Senior UX Designer and Engineer at Autodesk, working on a product named Alias. It's a premium 3d software program used in the industry for designing automotive and hardware devices. Chances are you have used a device or driven a car that has been designed in the Alias software. This is, in my opinion, very cool!</p>

                    <p>My skills set includes:</p>
                    <h5>Design</h5>
                        <ul>
                            <li>• UX/UI Design</li>
                            <li>• Product Design</li>
                            <li>• Wireframing</li>
                            <li>• Prototyping</li>
                            <li>• User Research</li>
                        </ul>
                    <h5>Development</h5>
                        <ul>
                            <li>• HTML</li>
                            <li>• CSS</li>
                            <li>• avascript</li>
                            <li>• React</li>
                            <li>• QT/QML</li>
                            <li>• Git</li>
                        </ul>
                    <h5>The main theme across my career and my real passion, is people.</h5>
                    <h5>The people I work with. The people I work for. The people I’m designing for.</h5>
                    <p>It drives me to build a great work environment, to grow a strong team, and to design the best product.</p>
                    <p>Feel free to reach out to me. I'm always happy to chat.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
