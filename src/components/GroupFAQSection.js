import styles from "./GroupFAQSection.module.css";

const GroupFAQSection = () => {
  return (
    <div className={styles.groupFAQSection}>
      <div className={styles.textFA}>No credit card required.</div>
      <h1 className={styles.textFA1}>Start a free trial today</h1>
      <button className={styles.groupFAQButtons}>
        <div className={styles.buttonFAQOutline}>
          <div className={styles.buttonFAQOutline}>
            <div className={styles.rectangleFAQButton} />
            <div className={styles.buttonText}>Download Now</div>
          </div>
        </div>
        <div className={styles.textFA2}>Start for free</div>
      </button>
    </div>
  );
};

export default GroupFAQSection;
