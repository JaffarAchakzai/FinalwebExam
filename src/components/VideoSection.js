import styles from "./VideoSection.module.css";

const VideoSection = () => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.videoBackground} />
      <img
        className={styles.videoOverlayIcon}
        loading="eager"
        alt=""
        src="/30-1@2x.png"
      />
      <img
        className={styles.videoMaskIcon}
        loading="eager"
        alt=""
        src="/27-1@2x.png"
      />
      <br/>
      <div className={styles.videoContentGroup}>
        <div className={styles.wrapperVideoTextGroup}>
          <img
            className={styles.videoTextGroup}
            alt=""
            src="/video-text-group@2x.png"
          />
        </div>
        <div className={styles.videoButtonGroup}>
          <img
            className={styles.playButtonIcon}
            loading="eager"
            alt=""
            src="/elements--buttons--play-02.svg"
          />
          <div className={styles.videoTitleGroup}>
            <div className={styles.screenDescription}>
              Unlock the blockchain potential to create Web3 Applications
            </div>
            <h1 className={styles.welcomeHeader}>
              <span>Web</span>
              <span className={styles.makr}>3Makr</span>
              <span> Redefining How You Create</span>
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.wrapperDeviceMockup}>
        <img
          className={styles.deviceMockupIcon}
          alt=""
          src="/device-mockup@2x.png"
        />
      </div>
      <header className={styles.footerNavigation}>
        <div className={styles.footerBackground} />
        <div className={styles.footerButtonGroup}>
          <button className={styles.footerButtonContainer}>
            <div className={styles.footerOutlineButton}>
              <div className={styles.footerOutlineButton}>
                <div className={styles.footerOutlineButton}>
                  <div className={styles.footerButtonBackground} />
                  <div className={styles.buttonText}>Download Now</div>
                </div>
              </div>
            </div>
            <div className={styles.footerOutlineButton}>
              <div className={styles.footerOutlineButton}>
                <div className={styles.footerOutlineButton}>
                  <div className={styles.base} />
                  <div className={styles.buttonText}>Download Now</div>
                </div>
              </div>
              <div className={styles.footerButtonText}>Start for free</div>
            </div>
          </button>
          <div className={styles.topNavigation}>
            <div className={styles.navigationMenu}>
              <div className={styles.navigationItem}>Web3Makr</div>
              <div className={styles.navigationItem1}>Services</div>
              <div className={styles.navigationItem2}>White paper</div>
              <div className={styles.navigationItem3}>Tool</div>
              <div className={styles.navigationItem4}>Contact us</div>
            </div>
            <img
              className={styles.logoPlaceholderIcon}
              alt=""
              src="/logo-placeholder@2x.png"
            />
          </div>
        </div>
      </header>
    </section>
  );
};

export default VideoSection;
