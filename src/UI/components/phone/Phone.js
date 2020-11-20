import React from 'react'

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const PhoneField = ({onChange, value, name}) => {

    return <PhoneInput
        name="phone"
        type="text"
        country={"us"}
        enableAreaCodes={true}
        areaCodes={{ us: ["332"] }}
        inputProps={{
            name: "phone",
            country: "us",
            required: true
        }}
        value={value}
        onChange={onChange}
        inputStyle={{
            width: '100%',
            borderRadius: '111px',
            height: '50px',
            maxWidth: '500px',
            border: '1px solid #6E6C6F'
        }}
        required
    />
}

export default PhoneField
