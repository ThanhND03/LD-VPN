import React from 'react'
import { assets } from '../../assets/assets'

import classNames from 'classnames/bind'
import styles from './Header.module.scss'
const cx = classNames.bind(styles)

const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src={assets.logo} alt="" />
                    <p>Lasles<span className={cx('fw700-logo')} >VPN</span></p>
                </div>
                <div className={cx('menu-bar')}>
                    <p>About</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                    <p>Help</p>
                </div>
                <div className={cx('login-account')}>
                    <button className={cx('btn-signin')} >Sign In</button>
                    <button className={cx('btn-signup')} >Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Header
