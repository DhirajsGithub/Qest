import React from 'react'
import styles from "./NavItem.module.css"
import { NavItem } from './NavItem'
import { FiChevronDown } from "react-icons/fi";
import { SecondaryButton } from '../../common/buttons/SecondaryButton';
import { PrimaryButton } from '../../common/buttons/PrimaryButton';
import { BrandLogo } from '../../common/BrandLogo';


const Navigation:React.FC = () => {
    const handleLoginClick = () => {}
  return (
    <div className={styles.navigation}>
        <div className={styles.colLeft}>
        <BrandLogo />
        </div>
        <div className={styles.colRight}>

        <div className={styles.navItems}>
            <NavItem path='/' name="Home" />
            <NavItem path='/features'  name="Features" icon={FiChevronDown} />
            <NavItem path='/pricing'  name="Pricing" />
            <NavItem path="/solutions" name="Solutions" icon={FiChevronDown} />
        </div>
        <div className={styles.line} />
        <div className={styles.navBtns}>
            <SecondaryButton onClick={handleLoginClick} name="Login" />
            <PrimaryButton onClick={handleLoginClick} name="Try For Free" />
        </div>
        </div>
    </div>
  )
}

export default Navigation