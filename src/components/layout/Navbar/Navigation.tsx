import React, { useState } from 'react';
import styles from "./NavItem.module.css";
import { NavItem } from './NavItem';
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { SecondaryButton } from '../../common/buttons/SecondaryButton';
import { PrimaryButton } from '../../common/buttons/PrimaryButton';
import { BrandLogo } from '../../common/BrandLogo';
import FeaturesModal from './FeaturesModal';

const Navigation: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isFeaturesModalOpen, setFeaturesModalOpen] = useState(false);
    const handleFeatureModalClose = () => setFeaturesModalOpen(false);
    const handleLoginClick = () => {};
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <div className={styles.navigation}>
            <div className={styles.colLeft}>
                <BrandLogo />
            </div>
            <div className={styles.hamburgerMenu} onClick={toggleMenu}>
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </div>
            <div className={`${styles.colRight} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <div className={styles.navItems}>
                    <NavItem path='/' name="Home" />
                    <NavItem onClick={()=> setFeaturesModalOpen(true)} path='/features' name="Features" icon={FiChevronDown} />
                    <NavItem path='/pricing' name="Pricing" />
                    <NavItem path="/solutions" name="Solutions" icon={FiChevronDown} />
                </div>
                <div className={styles.line} />
                <div className={styles.navBtns}>
                    <SecondaryButton onClick={handleLoginClick} name="Login" />
                    <PrimaryButton onClick={handleLoginClick} name="Try For Free" />
                </div>
            </div>
            <FeaturesModal isOpen={isFeaturesModalOpen} onClose={handleFeatureModalClose} />
        </div>
    );
};

export default Navigation;
