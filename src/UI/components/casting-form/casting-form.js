import React, { useEffect, useState } from 'react'
import Input from "../input/Input";
import PhoneField from "../phone/PhoneInput";
import LongInput from "../long-input/Long-input";
import Textarea from "../textarea/Textarea";
import Spinner from "../../../components/spinner/Spinner";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";
import { useHttp } from "../../../hooks/hook.http";
import './casting-form.scss'
import '../../../components/be-free/components/casting/Casting.scss'
import '../../../components/be-free/Be-free.scss'
import '../../../components/be-free/components/join/JoinTheTeam.scss'

const CastingForm = ({ setDone }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        link: '',
        about: '',
        surname: ''
    })
    const [canSend, setCanSend] = useState(false)
    const [isAgree, setIsAgree] = useState(false)

    const { t } = useTranslation()

    const { request, loading } = useHttp()

    const sendForm = async () => {
        const response = await request('/join/casting/', 'POST', form)
        if (response.ok) {
            setDone(true)
        }
    }

    const toggleIsAgree = () => setIsAgree(!isAgree)

    useEffect(() => {
        const { name, email, phone, link, about, surname } = form
        if (
            name.trim().length &&
            email.trim().length &&
            phone.length &&
            link.trim().length &&
            about.trim().length &&
            surname.trim().length &&
            isAgree
        ) {
            setCanSend(true)
        } else {
            setCanSend(false)
        }
    }, [form, isAgree])


    const changeHandler = e => setForm({ ...form, [e.target.name]: e.target.value })

    const phoneChange = value => setForm({ ...form, phone: value })

    return (
        <>
            <div className="casting_form-wrapper">
                <div className="befree-col casting__c-1">
                    <Input name="name" placeholder={t('name')} changeHandler={changeHandler} />
                    <Input name="surname" placeholder={t('surname')} changeHandler={changeHandler} />
                    <Input name="email" placeholder={t('email')} changeHandler={changeHandler} />
                    <PhoneField changeHandler={phoneChange} phoneValue={form.phone} />
                </div>
                <div className="befree-col casting__c-2">
                    <LongInput name="link" placeholder={t('link.video')} changeHandler={changeHandler} />
                    <Textarea name="about" placeholder={t('transmittalLater')} changeHandler={changeHandler} />
                </div>
            </div>
            <div style={{ width: '70%', marginTop: '20px', marginBottom: '14px' }}>
                * International social project. All stages of participation in the casting are absolutely free.
                By completing this application, you consent to us using, editing and transferring your data.
            </div>
            <input type="checkbox" className="custom-checkbox" id="accept" />
            <label onClick={toggleIsAgree} htmlFor="accept"> {t('casting.checkbox')} </label>
            {loading ? <Spinner /> : <Button onClick={sendForm} disabled={!canSend} title={t('send')} />}
        </>
    )
}

export default CastingForm
