import { assets } from "../../../../assets/assets";

import classNames from "classnames/bind";
import styles from "./LayoutThree.module.scss";
const cx = classNames.bind(styles);

import Slider from "../../../../components/Slider/Slider";
const LayoutThree = () => {
  return (
    <section id={cx("layout-three")}>
      <div className={cx("container")}>
        <div className={cx("list-programs")}>
          <img src={assets.netflix} alt="" />
          <img src={assets.reddit} alt="" />
          <img src={assets.amazon} alt="" />
          <img src={assets.discord} alt="" />
          <img src={assets.spotify} alt="" />
        </div>

        <div className={cx("title")}>
          <h1>
            Trusted by Thousands of <br /> Happy Customer
          </h1>
          <p>
            These are the stories of our customers who have joined us with great{" "}
            <br /> pleasure when using this crazy feature.
          </p>
        </div>

        <Slider />

        <div className={cx("box-sub")}>
          <div className={cx("left")}>
            <h1>
              Subscribe Now for <br /> Get Special Features!
            </h1>
            <p>Let's subscribe with us and find the fun.</p>
          </div>
          <div className={cx("right")}>
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutThree;
