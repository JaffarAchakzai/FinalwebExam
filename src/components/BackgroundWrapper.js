import styles from "./BackgroundWrapper.module.css";

const BackgroundWrapper = () => {
  return (
    <section className={styles.backgroundWrapper}>
      <div className={styles.backgroundLayer} />
      <div className={styles.backgroundLayer1} />
      <img
        className={styles.backgroundMaskGroup}
        alt=""
        src="/background-mask-group@2x.png"
      />
      <h2 className={styles.blogTitle}>Our blog</h2>
      <div className={styles.contentIntroduction}>
        <div className={styles.articleGroup}>
          <div className={styles.articleBaseGroup}>
            <div className={styles.articleBase} />
            <div className={styles.articleContainer}>
              <div className={styles.articleText}>
                <div className={styles.articleHeadline}>
                  The Design Side Of Conversion Rate Optimization
                </div>
              </div>
              <div className={styles.articleTagText}>
                <div className={styles.tagCategory}>Marketing</div>
                <div className={styles.tagIcon} />
                <div className={styles.tagDuration}>9 min read</div>
              </div>
              <div className={styles.articlePlaceholder}>
                <div className={styles.base} />
              </div>
            </div>
            <img
              className={styles.articleBaseLayer}
              loading="eager"
              alt=""
              src="/base@2x.png"
            />
          </div>
          <div className={styles.articleBaseGroup1}>
            <div className={styles.base1} />
            <div className={styles.article}>
              <div className={styles.articleText}>
                <div className={styles.analyticsFeaturesToContainer}>
                  <p
                    className={styles.analyticsFeatures}
                  >{`Analytics Features `}</p>
                  <p
                    className={styles.analyticsFeatures}
                  >{`to Improve User Experience      `}</p>
                </div>
              </div>
              <div className={styles.articleTagText}>
                <div className={styles.design}>Design</div>
                <div className={styles.tagIcon} />
                <div className={styles.tagDuration}>6 min read</div>
              </div>
              <div className={styles.articlePlaceholder}>
                <div className={styles.base} />
              </div>
            </div>
            <img
              className={styles.baseIcon}
              loading="eager"
              alt=""
              src="/base1@2x.png"
            />
          </div>
          <div className={styles.articleBaseGroup2}>
            <div className={styles.base1} />
            <div className={styles.article1}>
              <div className={styles.text1}>
                <div className={styles.creativeWaysTo}>
                  6 Creative Ways to Use Repeat Grids in Adobe XD
                </div>
                <div className={styles.articleSummary}>
                  <p className={styles.analyticsFeatures}>
                    Create screens directly in Method or
                  </p>
                  <p
                    className={styles.analyticsFeatures}
                  >{`add your imagesfrom Sketch or Figma. `}</p>
                </div>
              </div>
              <div className={styles.articleTagText}>
                <div className={styles.product}>Product</div>
                <div className={styles.tagIcon} />
                <div className={styles.minRead1}>10 min read</div>
              </div>
              <div className={styles.elementsPlaceholderRadiu1}>
                <div className={styles.base} />
              </div>
            </div>
            <img
              className={styles.baseIcon}
              loading="eager"
              alt=""
              src="/base2@2x.png"
            />
          </div>
          <div className={styles.articleBaseGroup3}>
            <div className={styles.articleBase} />
            <div className={styles.articleContainer}>
              <div className={styles.articleText}>
                <div className={styles.creativeWaysTo}>
                  The Design Side Of Conversion Rate Optimization
                </div>
                <div className={styles.createScreensDirectlyContainer}>
                  <p className={styles.analyticsFeatures}>
                    Create screens directly in Method or
                  </p>
                  <p
                    className={styles.analyticsFeatures}
                  >{`add your imagesfrom Sketch or Figma. `}</p>
                </div>
              </div>
              <div className={styles.articleTagText}>
                <div className={styles.tagCategory}>Marketing</div>
                <div className={styles.tagIcon} />
                <div className={styles.tagDuration}>9 min read</div>
              </div>
              <div className={styles.articlePlaceholder}>
                <div className={styles.base} />
              </div>
            </div>
            <img
              className={styles.baseIcon2}
              loading="eager"
              alt=""
              src="/base3@2x.png"
            />
          </div>
        </div>
        <div className={styles.introText}>
          <p className={styles.analyticsFeatures}>
            Create screens directly in Method or
          </p>
          <p
            className={styles.analyticsFeatures}
          >{`add your imagesfrom Sketch or Figma. `}</p>
        </div>
        <div className={styles.introText1}>
          <p className={styles.analyticsFeatures}>
            Create screens directly in Method or
          </p>
          <p
            className={styles.analyticsFeatures}
          >{`add your imagesfrom Sketch or Figma. `}</p>
        </div>
      </div>
    </section>
  );
};

export default BackgroundWrapper;
