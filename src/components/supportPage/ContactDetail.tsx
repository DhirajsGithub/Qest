import styles from "./ContactDetail.module.css";
import InputLableField from "./InputLableField";
import { PrimaryButton } from "../common/buttons/PrimaryButton";
import { IoMdArrowForward } from "react-icons/io";

const ContactDetail = () => {
  return (
    <div className={styles.ContactDetail}>
      <div className={styles.heading}>
        <h1>
          Get in touch with us.
          <br />
          We're here to assist you.{" "}
        </h1>
        <div className={styles.inputs}>
          <InputLableField
            lable="Business Name"
            placeholder="Search for your business listing"
            type="normal"
          />
          <InputLableField
            lable="Your Name"
            placeholder="Enter your name"
            type="normal"
          />
          <InputLableField
            lable="Phone Number"
            placeholder="9683729484"
            type="phone"
          />
          <InputLableField
            lable="Email Address"
            placeholder="e.g xyz@gmail.com"
            type="normal"
          />
        </div>
        <InputLableField
          lable="Message"
          placeholder="Enter your message"
          type="textArea"
        />

        <div style={{ marginTop: "60px" }}>
          <PrimaryButton
            extraPadding={true}
            icon={<IoMdArrowForward fontSize={18} />}
            name="Leave  us a Message"
          />
        </div>
     
      </div>
    </div>
  );
};

export default ContactDetail;
