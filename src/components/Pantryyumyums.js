import styles from "../styles/Pantryyumyums.module.css";
import pantryyumyums from "../assets/pantryyumyums.png";

function Cbc() {
    return (
        <section className={styles.pantryYY}>
            <h1>Pantry Yum Yums</h1>
            <h4>Design and Development Website</h4>
            <p>This website is a personal project of mine where I built it all from the ground up for both design and development. It was created in a week and built using HTML, CSS, Javascript, APIs, and React.</p> 
            <p>I've been a designer for over a decade but I have always been drawn to developement and understanding how things work. I wanted to expand that knowledge by challenging myself with a project where I designed and developed everything. That's how Pantry Yum Yums was born.</p>
            <a href="https://fervent-northcutt-df7533.netlify.app/">Check out Pantry Yum Yums Live!</a>
            <img src={pantryyumyums} className={styles.pantryYYImg} alt="CBC Player" />
        </section>
    );
}

export default Cbc;