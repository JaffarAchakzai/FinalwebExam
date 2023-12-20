import styles from "./ContentSection.module.css";

const ContentSection = () => {
  return (
    <section className={styles.contentSection}>
      <div className={styles.contentContainer}>
        <div className={styles.contentBackground} />
        <div className={styles.progressGroup}>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar} />
            <div className={styles.progressBar1} />
          </div>
        </div>
      </div>
      <div className={styles.testimonialSection}>
        <div className={styles.testimonialGroup}>
          <h1 className={styles.testimonialHeader}>What People Are Saying</h1>
          <div className={styles.testimonialTitle}>Testimonials</div>
          <div className={styles.testimonialText}>
            Multi chain interoperability
          </div>
        </div>
        <img
          className={styles.testimonialDividerIcon}
          alt=""
          src="/testimonial-divider@2x.png"
        />
        <div className={styles.testimonialImageGroup}>
          <img
            className={styles.testimonialImageIcon}
            loading="eager"
            alt=""
            src="/image@2x.png"
          />
          <div className={styles.testimonialQuote}>
            <p className={styles.web3makrProvidesA}>
              “Web3makr provides a solution for web3 developers and beginners by
              integrating the drag and drop feature for properties like NFT
              Search Marketplace, Wallet Integration, downloadable source code,
              and Smart Contract. Aside from this, the software also provides
              its users with ready-made and customizable templates that users
              can use when creating their web3 applications.”
            </p>
            <p className={styles.web3makrProvidesA}>&nbsp;</p>
            <p className={styles.web3makrProvidesA}>- Sophie Adderiy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
