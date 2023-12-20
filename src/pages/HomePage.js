import WidgetContainer from "../components/WidgetContainer";
import BackgroundWrapper from "../components/BackgroundWrapper";
import VideoSection from "../components/VideoSection";
import ContentSection from "../components/ContentSection";
import WebMakrInfoSection from "../components/WebMakrInfoSection";
import RectangleGroup from "../components/RectangleGroup";
import GroupFAQSection from "../components/GroupFAQSection";
import GroupCopyright from "../components/GroupCopyright";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <img
        className={styles.heroSectionIcon}
        alt=""
        src="/hero-section@2x.png"
      />
      <div className={styles.backgroundRectangle} />
      <div className={styles.separatorLine} />
      <div className={styles.screenCreationText}>
        Have a question? Check out our frequently asked questions to find your
        answer.
      </div>
      <h1 className={styles.fAQ}>Frequently asked questions</h1>
      <WidgetContainer />
      <BackgroundWrapper />
      <VideoSection />
      <ContentSection />
      <section className={styles.contentDivider} />
      <img
        className={styles.heroSectionIcon1}
        alt=""
        src="/hero-section@2x.png"
      />
      <WebMakrInfoSection />
      <RectangleGroup />
      <div className={styles.wrapperGroupUnspecified}>
        <img
          className={styles.groupUnspecifiedIcon}
          alt=""
          src="/group-unspecified@2x.png"
        />
      </div>
      <section className={styles.groupFooter}>
        <GroupFAQSection />
        <div className={styles.wrapperGroupFooterEnd}>
          <img
            className={styles.groupFooterEnd}
            loading="eager"
            alt=""
            src="/group-146.svg"
          />
        </div>
      </section>
      <h1 className={styles.textFA}>Metaverse</h1>
      <GroupCopyright />
      <img className={styles.frameMainIcon} alt="" src="/frame-main@2x.png" />
      <img
        className={styles.heroSectionIcon2}
        loading="eager"
        alt=""
        src="/group-151@2x.png"
      />
      <img
        className={styles.heroSectionIcon3}
        loading="eager"
        alt=""
        src="/group-156@2x.png"
      />
      <img
        className={styles.heroSectionIcon4}
        loading="eager"
        alt=""
        src="/group-155@2x.png"
      />
      <img
        className={styles.heroSectionIcon5}
        loading="eager"
        alt=""
        src="/group-153@2x.png"
      />
      <img
        className={styles.heroSectionIcon6}
        loading="eager"
        alt=""
        src="/group-152@2x.png"
      />
      <div className={styles.groupHeader}>
        <div className={styles.rectangleHeader} />
        <img
          className={styles.logoPlaceholderIcon}
          loading="eager"
          alt=""
          src="/aavelogo@2x.png"
        />
      </div>
      <img
        className={styles.heroSectionIcon7}
        loading="eager"
        alt=""
        src="/group-154@2x.png"
      />
    </div>
  );
};

export default HomePage;
