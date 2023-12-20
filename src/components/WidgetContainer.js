import SingleWidget from "./SingleWidget";
import Widget from "./Widget";
import WidgetGroup from "./WidgetGroup";
import styles from "./WidgetContainer.module.css";

const WidgetContainer = () => {
  return (
    <section className={styles.widgetContainer}>
      <img
        className={styles.contentGroupIcon}
        alt=""
        src="/content-group@2x.png"
      />
      <img
        className={styles.featureGroupIcon}
        alt=""
        src="/feature-group@2x.png"
      />
      <div className={styles.marketingGroup}>
        <div className={styles.emailMarketingGroup}>
          <div className={styles.emailMarketingGroup}>
            <div className={styles.emailMarketingGroup}>
              <h1 className={styles.workplaceText}>
                <p className={styles.canBeChanged}>
                  Can be changed to customizable ready made web3 dapps
                  templates.
                </p>
              </h1>
              <div className={styles.marketingEmailGroup}>
                <div className={styles.emailBatchGroup}>
                  <div className={styles.emailSubjectGroup}>NFT(ERC721).</div>
                  <div className={styles.emailSubjectGroup1}>01</div>
                  <div className={styles.emailSubjectGroup2}>02</div>
                  <div className={styles.emailSubjectGroup3}>03</div>
                  <div className={styles.emailSubjectGroup4}>04</div>
                  <div className={styles.emailSubjectGroup5}>05</div>
                  <div className={styles.emailSubjectGroup6}>DEFI</div>
                  <div className={styles.emailSubjectGroup7}>
                    Smart Contracts
                  </div>
                  <div className={styles.emailSubjectGroup8}>GameFi</div>
                  <div className={styles.emailSubjectGroup9}>Metaverse</div>
                </div>
                <button className={styles.outlineButtonGroup}>
                  <div className={styles.emailMarketingGroup}>
                    <div className={styles.emailMarketingGroup}>
                      <div className={styles.outlineButtonShape} />
                      <div className={styles.buttonText}>Download Now</div>
                    </div>
                  </div>
                  <div className={styles.outlineButtonText}>Start building</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.decorativeRectangleIcon}
        alt=""
        src="/decorative-rectangle@2x.png"
      />
      <div className={styles.widgetGroup}>
        <SingleWidget />
      </div>
      <div className={styles.widgetGroup1}>
        <Widget />
      </div>
      <WidgetGroup
        featureIcons="/icons--stats@2x.png"
        iconsStatsDuplicate="/icons-stats-duplicate@2x.png"
        statsIconsThird="/stats-icons-third@2x.png"
        iconsStatsFourth="/icons-stats-fourth@2x.png"
        iconButton="/elements--buttons--icon--32px1.svg"
        propTop="17.34%"
        propBottom="53.03%"
        propTop1="33.33%"
        propBottom1="27.17%"
      />
      <WidgetGroup
        featureIcons="/icons--stats@2x.png"
        iconsStatsDuplicate="/icons-stats-duplicate@2x.png"
        statsIconsThird="/stats-icons-third@2x.png"
        iconsStatsFourth="/icons-stats-fourth@2x.png"
        iconButton="/elements--buttons--icon--32px2.svg"
        propTop="48.76%"
        propBottom="21.61%"
        propTop1="32.81%"
        propBottom1="27.69%"
        propBackgroundColor="#dfe4ea"
      />
      <img
        className={styles.widgetGroupIcon}
        loading="eager"
        alt=""
        src="/rectangle-52@2x.png"
      />
      <img
        className={styles.widgetGroupIcon1}
        loading="eager"
        alt=""
        src="/rectangle-53@2x.png"
      />
      <img
        className={styles.widgetGroupIcon2}
        loading="eager"
        alt=""
        src="/rectangle-54@2x.png"
      />
      <button className={styles.iconTextGroup}>
        <div className={styles.iconBaseRectangle} />
        <div className={styles.iconColor}>
          <img
            className={styles.iconIndicator}
            alt=""
            src="/icon-indicator@2x.png"
          />
          <div className={styles.buttonText1}>Read More</div>
        </div>
      </button>
    </section>
  );
};

export default WidgetContainer;
