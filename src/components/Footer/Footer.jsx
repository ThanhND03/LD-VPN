import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
const cx = classNames.bind(styles)

import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div id={cx('footer')}>
            <div className={cx("container")}>
                <div className={cx("footer-left")}>
                    <div className={cx("logo")}>
                        <img src={assets.logo_footer} alt="" />
                        <p>Lasles<span className={cx('fw700-logo')}>VPN</span></p>
                    </div>
                    <p className={cx("text-ft")}><span className={cx('fw500-logo')}>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                    <div className={cx("list-programs")}>
                        <img src={assets.icon_facebook} alt="" />
                        <img src={assets.icon_twiter} alt="" />
                        <img src={assets.icon_ins} alt="" />
                    </div>
                    <p className={cx('copyright')}>©2020Lasles<span className={cx('fw500-logo')}>VPN</span></p>
                </div>
                <div className={cx("footer-right")}>
                    <div>
                        <b>Product</b>
                        <ul>
                            <li>Download</li>
                            <li>Pricing</li>
                            <li>Locations</li>
                            <li>Server</li>
                            <li>Countries</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div>
                        <b>Engage</b>
                        <ul>
                            <li>LaslesVPN ?</li>
                            <li>FAQ</li>
                            <li>Tutorials</li>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>

                    <div>
                        <b>Earn Money</b>
                        <ul>
                            <li>Affiliate</li>
                            <li>Become Partner</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
