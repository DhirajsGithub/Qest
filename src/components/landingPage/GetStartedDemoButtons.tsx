import React from "react";
import { PrimaryButton } from "../common/buttons/PrimaryButton";
import { IoArrowForward } from "react-icons/io5";
import { SecondaryButton } from "../common/buttons/SecondaryButton";

const GetStartedDemoButtons = () => {
  const handleClick = () => {
    alert("Button Clicked");
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <PrimaryButton
        onClick={handleClick}
        name="Get Started"
        icon={<IoArrowForward />}
      />
      <SecondaryButton onClick={handleClick} name="Book A Demo" />
    </div>
  );
};

export default GetStartedDemoButtons;
