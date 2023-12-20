import { useMemo } from "react";
import styles from "./WidgetGroup.module.css";

const WidgetGroup = ({
  featureIcons,
  iconsStatsDuplicate,
  statsIconsThird,
  iconsStatsFourth,
  iconButton,
  propTop,
  propBottom,
  propTop1,
  propBottom1,
  propBackgroundColor,
}) => {
  const widgetGroupStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const widgetBaseStyle = useMemo(() => {
    return {
      top: propTop1,
      bottom: propBottom1,
      backgroundColor: propBackgroundColor,
    };
  }, [propTop1, propBottom1, propBackgroundColor]);

  return (
    <div className={styles.widgetGroup} style={widgetGroupStyle}>
      <div className={styles.widget}>
        <div className={styles.widget}>
          <div className={styles.baseLayer} />
          <div className={styles.featureText}>
            <div className={styles.singleFeature}>
              <img
                className={styles.featureIcons}
                loading="eager"
                alt=""
                src={featureIcons}
              />
              <div className={styles.taxes}>Taxes</div>
            </div>
            <div className={styles.featureDuplicate}>
              <img
                className={styles.iconsStatsDuplicate}
                alt=""
                src={iconsStatsDuplicate}
              />
              <div className={styles.salesText}>Total Sales</div>
            </div>
            <div className={styles.thirdFeature}>
              <img
                className={styles.featureIcons}
                alt=""
                src={statsIconsThird}
              />
              <div className={styles.taxes}>Transactions</div>
            </div>
            <div className={styles.fourthFeature}>
              <img
                className={styles.iconsStatsFourth}
                alt=""
                src={iconsStatsFourth}
              />
              <div className={styles.profitText}>Profit</div>
            </div>
          </div>
          <div className={styles.placeholderElement}>
            <div className={styles.placeholderBase} />
          </div>
          <img
            className={styles.iconButton}
            loading="eager"
            alt=""
            src={iconButton}
          />
          <div className={styles.collusionText}>
            Check out each collumn for more details
          </div>
          <div className={styles.activityLabel}>Activity</div>
        </div>
      </div>
      <div className={styles.widgetBase} style={widgetBaseStyle} />
    </div>
  );
};

export default WidgetGroup;
