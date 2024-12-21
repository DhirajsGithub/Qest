import React from "react";
import styles from "./FeaturesModal.module.css";
import {
  CiMonitor,
  CiMobile1,
  CiSquarePlus,
  CiStar,
  CiMail,
  CiCreditCard1,
} from "react-icons/ci";
import { FiFileText, FiTriangle, FiLayout } from "react-icons/fi";
import { TbMessageCirclePlus } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { GoGraph } from "react-icons/go";
import { SlDirections } from "react-icons/sl";
import {
  PiRankingLight,
  PiShootingStarThin,
  PiBookOpenUserLight,
} from "react-icons/pi";
import { LuSchool, LuNewspaper } from "react-icons/lu";
import { IoChevronForwardSharp } from "react-icons/io5";

import { MdOutlineSupportAgent } from "react-icons/md";

interface FeaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeaturesModal: React.FC<FeaturesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div onMouseLeave={onClose} className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <div className={styles.section}>
            <h3>Discover</h3>
            <ul>
              <div>
                <CiMonitor fontSize={16} />
                <li>Custom Branded Website</li>
              </div>
              <div>
                <CiMobile1 fontSize={16} />
                <li>User Mobile App</li>
              </div>
              <div>
                <CiSquarePlus fontSize={16} />
                <li>Business Webpage</li>
              </div>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>Manage</h3>
            <ul className={styles.middleList}>
              <ul>
                <div>
                  <PiBookOpenUserLight fontSize={16} />
                  <li>Courses</li>
                </div>
                <div>
                  <LuSchool fontSize={16} />
                  <li>Classes</li>
                </div>
                <div>
                  <LuNewspaper fontSize={16} />
                  <li>Appointments</li>
                </div>
                <div>
                  <MdOutlineSupportAgent fontSize={16} />
                  <li>Services</li>
                </div>
                <div>
                  <PiShootingStarThin fontSize={16} />
                  <li>Retreats</li>
                </div>
                <div>
                  <CiCreditCard1 fontSize={16} />
                  <li>Payments</li>
                </div>
                <div>
                  <FiLayout fontSize={16} />
                  <li>Design Tools</li>
                </div>
              </ul>
              <ul>
                <div>
                  <CiMail fontSize={16} />
                  <li>Communication</li>
                </div>
                <div>
                  <FiTriangle fontSize={16} />
                  <li>Tails Session</li>
                </div>
                <div>
                  <BsPersonGear fontSize={16} />
                  <li>Staff Roles</li>
                </div>
                <div>
                  <GrWorkshop fontSize={16} />
                  <li>Workshops</li>
                </div>
                <div>
                  <GoGraph fontSize={16} />
                  <li>Reporting tools</li>
                </div>
                <div>
                  <SlDirections fontSize={16} />
                  <li>Multi-Location</li>
                </div>
                <div>
                  <PiRankingLight fontSize={16} />
                  <li>Events</li>
                </div>
              </ul>
            </ul>
          </div>

          
          <div className={styles.section}>
            <h3>Grow</h3>
            <ul>
              <div>
                <CiStar fontSize={16} />
                <li>Ai Marketing Tools</li>
              </div>
              <div>
                <TbMessageCirclePlus fontSize={16} />
                <li>Socail Media Integration</li>
              </div>
              <div>
                <FiFileText fontSize={16} />
                <li>CRM</li>
              </div>
            </ul>
          </div>

        </div>
        <div className={styles.footer}>
          <button className={styles.seeAllButton}>See all features <IoChevronForwardSharp /> </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesModal;
