import { assets } from "../../../../assets/assets";

import classNames from "classnames/bind";
import styles from "./LayoutTwo.module.scss";
const cx = classNames.bind(styles);

import Box from "../../../../components/Box/Box";

const LayoutTwo = () => {
    return (
        <section id={cx("layout-two")}>
            <div className={cx("container")}>
                <div className={cx("title")}>
                <h1>Choose Your Plan</h1>
                <p>
                    Let's choose the package that is best for you and explore it happily
                    and <br /> cheerfully.
                </p>
                </div>
                <div className={cx("list-box")}>
                <Box
                    src={assets.Free}
                    title="Free Plan"
                    lists={[
                    "Unlimited Bandwitch",
                    "Encrypted Connection",
                    "No Traffic Logs",
                    "Works on All Devices",
                    ]}
                    price="Free"
                />

                <Box
                    src={assets.Standard}
                    title="Standard Plan"
                    lists={[
                    "Unlimited Bandwitch",
                    "Encrypted Connection",
                    "Yes Traffic Logs",
                    "Works on All Devices",
                    "Connect Anyware",
                    ]}
                    price="$9 / mo"
                />

                <Box
                    src={assets.Premium}
                    title="Premium Plan"
                    lists={[
                    "Unlimited Bandwitch",
                    "Encrypted Connection",
                    "Yes Traffic Logs",
                    "Works on All Devices",
                    "Connect Anyware",
                    "Get New Features",
                    ]}
                    price="$12 / mo"
                />
                </div>

                <div className={cx("title")}>
                <h1>
                    Huge Global Network <br /> of Fast VPN
                </h1>
                <p>
                    See <span className="fw500-logo">LaslesVPN</span> everywhere to make
                    it easier for you when you move <br /> locations.
                </p>
                </div>

                <div className={cx("vpn-global-img")}>
                <img src={assets.global} alt="" />
                </div>
            </div>
        </section>
    );
};

export default LayoutTwo;
