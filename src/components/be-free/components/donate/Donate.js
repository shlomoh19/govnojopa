import React, { useState } from 'react'
import './Donate.scss'
import Input from "../../../../UI/components/input/Input";
import TextArea from "../../../../UI/components/textarea/Textarea";

const Donate = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        about: ''
    })


    // const changeHandler = e => setForm({ ...form, [e.target.name]: e.target.value })

    return (
        <>
        <form className="befree-container">
            <h1 className="befree-title befree-title-blue">NOT NOW</h1>
        </form>
            {/* <form className="befree-container">
                <h2 className="befree-title">IF YOU CAN & <span className="befree-title-blue">IF YOU WANT</span></h2>
                <p className="befree__title" />
                <div className="befree-flex">
                    <div className="befree-col casting__c-1">
                        <Input name="name" placeholder="NAME" changeHandler={changeHandler} />
                        <Input name="email" placeholder="EMAIL" changeHandler={changeHandler} />
                        <span style={{ marginBottom: '30px', marginTop: '10px', width: '100%' }}>
                            <PhoneField changeHandler={changeHandler} />
                        </span>
                    </div>
                    <div className="donate__col casting__c-2">
                        <TextArea name="about" placeholder="transmittal letter" changeHandler={changeHandler} />
                    </div>
                </div>
                <div className="donate__btns">
                    <div className="donate__btns-item">PayPall</div>
                    <div className="donate__btns-item">Что то</div>
                    <div className="donate__btns-item">Что то</div>
                    <div className="donate__btns-item">И еще что то</div>
                </div>
            </form> */}
        </>

    )
}

export default Donate;