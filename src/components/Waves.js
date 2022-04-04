import styles from "../styles/Waves.module.css";
import wave from "../assets/wave.svg";

function Wave() {
    return (
        <div className={styles.waves}>
            <div className={styles.wavesGallery}>
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
                <img src={wave} alt="Tree" class={styles.wavesImg} />
            </div>
            <hr className={styles.solid1}></hr>
        </div>
    )
}

export default Wave;

