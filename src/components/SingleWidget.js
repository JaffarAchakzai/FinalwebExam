import styles from "./SingleWidget.module.css";

const SingleWidget = () => {
  return (
    <div className={styles.singleWidget}>
      <div className={styles.widgetBase} />
      <div className={styles.actionButton}>
        <div className={styles.primaryButton} />
        <div className={styles.secondaryButton} />
        <div className={styles.primaryButtonInactive} />
        <div className={styles.secondaryButtonInactive} />
        <div className={styles.tertiaryButtonInactive} />
        <div className={styles.quaternaryButtonInactive} />
        <div className={styles.quinaryButtonInactive} />
        <div className={styles.senaryButtonInactive} />
        <div className={styles.septenaryButtonInactive} />
        <div className={styles.octonaryButtonInactive} />
      </div>
      <img
        className={styles.nonaryButtonInactive}
        loading="eager"
        alt=""
        src="/elements--buttons--icon--32px.svg"
      />
      <div className={styles.denaryButtonInactive}>
        Check out each collumn for more details
      </div>
      <div className={styles.bookmarkIcon}>Total Sales</div>
    </div>
  );
};

export default SingleWidget;
