import { assets } from "../../../../assets/assets";

import classNames from "classnames/bind";
import styles from "./LayoutOne.module.scss";
const cx = classNames.bind(styles);

const LayoutOne = () => {
  return (
    <section id={cx("layout-one")}>
      <div className={cx("container")}>
        <div className={cx("content-one")}>
          <div className={cx("left")}>
            <p className={cx("title")}>
              Want anything to be easy with{" "}
              <span className={cx("fw700-logo")}>LaslesVPN.</span>
            </p>
            <p className={cx("text")}>
              Provide a network for all your needs with ease and fun using{" "}
              <span className={cx("fw500-logo")}>LaslesVPN</span> discover
              interesting features from us.
            </p>
            <button>Get Started</button>
          </div>
          <div className={cx("right")}>
            <img src={assets.img_1} alt="" />
          </div>
        </div>

        <div className={cx("content-two")}>
          <div>
            <div className={cx("icon")}>
              <img src={assets.icon_user} alt="" />
            </div>
            <div className={cx("text")}>
              <b>90+</b>
              <p>Users</p>
            </div>
          </div>
          <hr />
          <div>
            <div className={cx("icon")}>
              <img src={assets.icon_user} alt="" />
            </div>
            <div className={cx("text")}>
              <b>30+</b>
              <p>Locations</p>
            </div>
          </div>
          <hr />
          <div>
            <div className={cx("icon")}>
              <img src={assets.icon_user} alt="" />
            </div>
            <div className={cx("text")}>
              <b>50+</b>
              <p>Servers</p>
            </div>
          </div>
        </div>

        <div className={cx("content-three")}>
          <div className={cx("left")}>
            <img src={assets.img_2} alt="" />
          </div>
          <div className={cx("right")}>
            <p className={cx("title")}>We Provide Many Features You Can Use</p>
            <p className={cx("text")}>
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul>
              <li>
                <img src={assets.circle_check} alt="" />
                Powerfull online protection.
              </li>
              <li>
                <img src={assets.circle_check} alt="" />
                Internet without borders.
              </li>
              <li>
                <img src={assets.circle_check} alt="" />
                Supercharged VPN
              </li>
              <li>
                <img src={assets.circle_check} alt="" />
                No specific time limits.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutOne;
