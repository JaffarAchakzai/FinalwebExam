import styles from "./GroupCopyright.module.css";

const GroupCopyright = () => {
  return (
    <section className={styles.groupCopyright}>
      <div className={styles.textCopyright}>Copyright 2022 © Web3makr</div>
      <div className={styles.groupSocialButtons}>
        <div className={styles.buttonsSocialIcons}>
          <img
            className={styles.iconsSocialMedia}
            loading="eager"
            alt=""
            src="/iconssocialstwitter.svg"
          />
        </div>
        <div className={styles.buttonsSocialIcons1}>
          <img
            className={styles.iconsSocialMedia}
            loading="eager"
            alt=""
            src="/iconssocialsinstagram.svg"
          />
        </div>
        <div className={styles.buttonsSocialIcons2}>
          <img
            className={styles.iconsSocialMedia}
            loading="eager"
            alt=""
            src="/iconssocialsfacebook.svg"
          />
        </div>
      </div>
      <div className={styles.groupFooterNav}>
        <img
          className={styles.groupUnspecifiedSecondary}
          loading="eager"
          alt=""
          src="/group-114@2x.png"
        />
        <div className={styles.menuFooter}>
          <div className={styles.menuFooterItems}>Web3Makr</div>
          <div className={styles.menuFooterItems1}>Services</div>
          <div className={styles.menuFooterItems2}>White paper</div>
          <div className={styles.menuFooterItems3}>Tool</div>
          <div className={styles.menuFooterItems4}>Contact us</div>
        </div>
      </div>
    </section>
  );
};

export default GroupCopyright;
