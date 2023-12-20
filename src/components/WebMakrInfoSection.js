import styles from "./WebMakrInfoSection.module.css";

const WebMakrInfoSection = () => {
  return (
    <div className={styles.webMakrInfoSection}>
      <div className={styles.iconRemoveGroup}>
        <img
          className={styles.iconRemove}
          loading="eager"
          alt=""
          src="/-icons--remove.svg"
        />
        <div className={styles.featureSummary}>
          <p className={styles.web3makrProvidesA}>
            Web3makr provides a solution for web3 developers and beginners by
            integrating the drag and drop feature for properties like NFT Search
            Marketplace, Wallet Integration, downloadable source code, and Smart
            Contract. Aside from this, the software also provides its users with
            ready-made and customizable templates that users can use when
            creating their web3 applications.
          </p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
        </div>
        <div className={styles.webMkrUsage}>Why should I use Web3Mkr?</div>
        <div className={styles.contentSeparator} />
      </div>
      <div className={styles.iconPlusDividerGroup}>
        <img
          className={styles.iconPlus}
          loading="eager"
          alt=""
          src="/-icons--plus.svg"
        />
        <div className={styles.textDivider} />
        <div className={styles.webMakrDescription}>
          What is Web3Makr and what does it do?
        </div>
        <div className={styles.contentSeparator} />
      </div>
      <div className={styles.iconPlusDividerGroup1}>
        <img
          className={styles.iconsPlus}
          loading="eager"
          alt=""
          src="/-icons--plus.svg"
        />
        <div className={styles.divider} />
        <div className={styles.whatIsWeb3makr}>
          What is Web3Makr and what does it do?
        </div>
        <div className={styles.contentSeparator} />
      </div>
    </div>
  );
};

export default WebMakrInfoSection;
