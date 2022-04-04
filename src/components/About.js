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
                    <p>I’m currently a Senior User Experience Designer at Autodesk, working on a product named Alias. It's a premium 3d software program used in the industry for designing automotive and hardware devices. Chances are you have used a device or driven a car that has been designed in the Alias software. This is, in my opinion, very cool!</p>

                    <p>I've been in the industry for 13 years and have worked in various markets such as health, advertising, finance and software. I love solving challenging problems and seeing products come to life. I also really love helping people grow and reach their true potential.</p>

                    <p>I'm always eager to learn and at the moment, I'm currently jumping into the deep end and learning all about react, html/css, javascript, and qml. Aside from that, going for walks on a nice sunny day is my jam. </p>

                    <p>Feel free to reach out to me. I'm always happy to chat.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
