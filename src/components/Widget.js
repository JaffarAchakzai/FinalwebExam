import styles from "./Widget.module.css";

const Widget = () => {
  return (
    <div className={styles.widget}>
      <div className={styles.base} />
      <div className={styles.elementsButtonsPrimary}>
        <div className={styles.button}>
          <div className={styles.base1} />
          <div className={styles.buttonText}>Read More</div>
          <img className={styles.flashIcon} alt="" src="/flash-icon@2x.png" />
        </div>
      </div>
      <div className={styles.createScreensDirec}>
        Create screens directly in Method or add your images from Sketch…
      </div>
      <div className={styles.elementsPlaceholderRadiu}>
        <div className={styles.base2} />
      </div>
      <img
        className={styles.iconsBookmark}
        loading="eager"
        alt=""
        src="/icons--bookmark.svg"
      />
      <div className={styles.newsHeadline}>Daily News</div>
    </div>
  );
};

export default Widget;
