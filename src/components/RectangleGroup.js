import styles from "./RectangleGroup.module.css";

const RectangleGroup = () => {
  return (
    <section className={styles.rectangleGroup}>
      <div className={styles.nestedGroup}>
        <img
          className={styles.innerGroupA}
          alt=""
          src="/inner-group-a@2x.png"
        />
        <img
          className={styles.innerGroupB}
          alt=""
          src="/inner-group-b@2x.png"
        />
        <div className={styles.textButtonGroup}>
          <div className={styles.textualContentGroup}>
            <div className={styles.textualContentGroup}>
              <div className={styles.syncHighlight}>
                Most entrepreneurs want to create their own web3 sites,
                unfortunately, they dont know much about creating one. Web3Makr
                makes it easier for newbies to create a blockchain-based
                collectibles solution without the hassle of leaving their
                favorite creation tools and by simple drag and drop
                functionality.
              </div>
              <h1 className={styles.workBenefit}>
                <p className={styles.create}>Create</p>
                <p className={styles.create}>{`your own Web3 Masterpiece `}</p>
              </h1>
              <button className={styles.outlineButtonGroup}>
                <div className={styles.textualContentGroup}>
                  <div className={styles.textualContentGroup}>
                    <div className={styles.buttonBackground} />
                    <div className={styles.buttonText}>Download Now</div>
                  </div>
                </div>
                <div className={styles.buttonText1}>Start building</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.vectorRectangleIcon}
        alt=""
        src="/vector-rectangle@2x.png"
      />
      <div className={styles.solidRectangle} />
      <img
        className={styles.vectorShapeA}
        alt=""
        src="/vector-shape-a@2x.png"
      />
      <img
        className={styles.vectorShapeB}
        alt=""
        src="/vector-shape-b@2x.png"
      />
      <img
        className={styles.rectangleSecondaryIcon}
        loading="eager"
        alt=""
        src="/rectangle-67.svg"
      />
      <img
        className={styles.rectangleTertiaryIcon}
        alt=""
        src="/rectangle-tertiary@2x.png"
      />
      <img
        className={styles.rectangleQuaternaryIcon}
        alt=""
        src="/rectangle-quaternary@2x.png"
      />
      <div className={styles.rectangleDouble} />
      <div className={styles.rectangleDouble1} />
    </section>
  );
};

export default RectangleGroup;
