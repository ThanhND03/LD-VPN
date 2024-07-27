import { assets } from "../../assets/assets";

import classNames from "classnames/bind";
import styles from "./Box.module.scss";
const cx = classNames.bind(styles);

const Box = ({ src, title, lists, price }) => {
  return (
    <div className={cx("box")}>
      <img className={cx('img-big')} src={src} alt="" />
      <b>{title}</b>
      <ul>
        {lists.map((list, index) => {
          return (
            <li key={index}>
              <img src={assets.icon_check} alt="" />
              <p>{list}</p>
            </li>
          );
        })}
      </ul>
      <div className={cx('box-bottom')}>
          <p className={cx("price")}>{price}</p>
          <button>Select</button>
      </div>
    </div>
  );
};

export default Box;
