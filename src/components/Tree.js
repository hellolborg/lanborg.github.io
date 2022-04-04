import styles from "../styles/Tree.module.css";
import tree from "../assets/tree2x.png";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import cloud3 from "../assets/cloud3.png";

function Tree() {
    return (
        <div>
            <span class={styles.redCircle}></span>
            <hr className={styles.solid1}></hr>
            <hr className={styles.solid2}></hr>
            <hr className={styles.solid3}></hr>
            <hr className={styles.solid4}></hr>
            <hr className={styles.solid5}></hr>
            <img src={tree} alt="Tree" class={styles.tree} />
            <hr className={styles.solidBase}></hr>
            <img src={cloud1} alt="Tree" class={styles.cloud1} />
            <img src={cloud2} alt="Tree" class={styles.cloud2} />
            <img src={cloud3} alt="Tree" class={styles.cloud3} />
        </div>
    );
}

export default Tree;
