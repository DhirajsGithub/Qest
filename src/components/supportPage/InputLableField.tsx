import React from 'react'
import styles from "./ContactDetail.module.css"

interface InputFeildProps {
    placeholder: string;
}

const InputFeild:React.FC<InputFeildProps> = ({placeholder}) => {
    return (
        <div>

            <input className={styles.input} placeholder={placeholder} type="text" />
        </div>
    )
}

const PhoneInputFeild:React.FC<InputFeildProps> = ({placeholder}) => {
    return (
        <div className={styles.phoneInputDiv} >
            <div>
                <p>+91 </p>
            </div>
            <input className={styles.phoneInput} placeholder={placeholder} type="number" />
        </div>
    )
}

const TextField:React.FC<InputFeildProps> = ({placeholder}) => {
    return (
        <div className={styles.textAreaField}>
            <textarea rows={3} className={styles.textArea} placeholder={placeholder} />
        </div>
    )
}

interface InputLableFieldProps {
    lable: string;
    placeholder: string;
    type: string;
}

const InputLableField:React.FC<InputLableFieldProps> = ({lable, placeholder, type}) => {
  return (
    <div className={styles.inputLable}>
        <p>
            {lable} <span>*</span>
        </p>
        {type == "normal" && <InputFeild placeholder={placeholder} />}
        {type == "phone" &&<PhoneInputFeild placeholder={placeholder} />}
       {type === "textArea" && <TextField placeholder={placeholder} />}
    </div>
  )
}

export default InputLableField