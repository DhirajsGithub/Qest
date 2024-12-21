import React from "react";
import { ClientEngagement } from "./ClientEngagement";
import fabIcon from "../../assets/icons/Fab Button.svg";
import styles from "./ClientEngagement.module.css"

const OutFeatures: React.FC = () => {
  return (
    <div className={styles.outFeatures}>
      <div
        className={styles.outFeaturesCards}
      >
        <ClientEngagement name="Seemless Onboarding" />
        <ClientEngagement name="Client Engagement" />
        <ClientEngagement name="Generate Report" />
        <ClientEngagement name="Revenue Growth" />
      </div>
      <div
        className={styles.fabIcon}
      >
        <img style={{ width: "100%", height: "100%" }} src={fabIcon} alt="" />
      </div>
    </div>
  );
};

export default OutFeatures;
