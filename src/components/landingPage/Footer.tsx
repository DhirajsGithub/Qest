import React from "react";
import styles from "./Footer.module.css";
import { DownloadLinkProps, FooterLinkProps } from "../../types/types";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const FooterLinkSection: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <div className={styles.linkSection}>
      <div className={styles.sectionTitle}>{title}</div>
      <div className={styles.linkList}>
        {links.map((link, index) => (
          <a href="#" key={index} className={styles.link}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

const DownloadSection: React.FC<{ links: DownloadLinkProps[] }> = ({
  links,
}) => {
  return (
    <div className={styles.downloadSection}>
      <div className={styles.sectionTitle}>Download</div>
      {links.map((link, index) => (
        <div key={index} className={styles.downloadLink}>
          <div>
            <div className={styles.birdWise}>
            <img
              loading="lazy"
              src={link.iconAnd}
              alt=""
              className={styles.downloadIcon}
            />
            <a href="#" key={index}>
              {link.primaryText}
            </a>
            
            </div>

            <div className={styles.birdWise}>
            <img
              loading="lazy"
              src={link.iconIos}
              alt=""
              className={styles.downloadIcon}
            />
             <a href="#" key={index}>
              {link.secondaryText}
            </a>
            </div>
            
           
          </div>
        </div>
      ))}
    </div>
  );
};

export const Footer: React.FC = () => {
  const companyLinks = {
    title: "Company",
    links: ["About us", "Contact us", "Careers"],
  };

  const businessSizeLinks = {
    title: "Business Size",
    links: [
      "Enterpreneurs",
      "SMBs",
      "Growth Bussiness",
      "Household Services",
      "Enterprise",
    ],
  };

  const businessTypeLinks = {
    title: "Business Type",
    links: [
      "Health & Wellness",
      "Sports",
      "Learning Activites",
      "Household Services",
      "Miscellaneous",
    ],
  };

  const legalLinks = {
    title: "Legal",
    links: ["Privacy Policy", "Terms & Conditions", "Return Policy"],
  };

  const downloadLinks = [
    {
      iconAnd:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b84ff1ddc3c1a92510f1f4b88a292a073100d205bd1b13ce6a09cebf6532e2f8?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
      iconIos:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fb7ac2014ec9e5ec7c416b60bbb25f1babdd8272436e7f6828bec2801f9041cf?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
      primaryText: "Bussiness App",
      secondaryText: "Business App",
    },
    {
      iconAnd:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b84ff1ddc3c1a92510f1f4b88a292a073100d205bd1b13ce6a09cebf6532e2f8?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
      iconIos:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fb7ac2014ec9e5ec7c416b60bbb25f1babdd8272436e7f6828bec2801f9041cf?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
      primaryText: "User App",
      secondaryText: "User App",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.content}>
          <FooterLinkSection {...companyLinks} />
          <FooterLinkSection {...businessSizeLinks} />
          <FooterLinkSection {...businessTypeLinks} />
          <DownloadSection links={downloadLinks} />
          <FooterLinkSection {...legalLinks} />

          <div className={styles.contactSection}>
            <div className={styles.sectionTitle}>Contact us</div>
            <div className={styles.contactInfo}>
              support@Rmax.com
              <br />
              +91-8459671235
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6054617cd8a6fa8f8312f8d2928ac7bf9e87a6e7983d4d3f2ae1830e151ca6?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975"
            alt=""
            className={styles.divider}
          />
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              © 2024 Copyright, All Right Reserved@RMax
            </div>
            <div className={styles.socials}>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
