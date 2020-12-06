import React, { useEffect, useState, useRef } from 'react'
import Input from "../input/Input";
import PhoneField from "../phone/PhoneInput";
import LongInput from "../long-input/Long-input";
import Spinner from "../../../components/spinner/Spinner";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";
import { useHttp } from "../../../hooks/hook.http";
import TermsModal from './TermsModal';
import './casting-form.scss'
import '../../../components/be-free/components/casting/Casting.scss'
import '../../../components/be-free/Be-free.scss'
import '../../../components/be-free/components/join/JoinTheTeam.scss'
import './casting-textArea.scss'

const CastingForm = ({ setDone }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        video1: '',
        video2: '',
        about: '',
        surname: ''
    })
    const [canSend, setCanSend] = useState(false)
    const [isAgree, setIsAgree] = useState(false)
    const [termsModalIsOpen, setTermsModalIsOpen] = useState(false)
    const [errors, setErrors] = useState({
        name: [''],
        email: [''],
        phone: [''],
        video1: [''],
        video2: [''],
        about: [''],
        surname: ['']
    })


    const { t } = useTranslation()

    const { request, loading } = useHttp()

    useEffect(() => {
        const { name, email, phone, video1, video2, about, surname } = form
        if (
            name.trim().length &&
            email.trim().length &&
            phone.length &&
            video1.trim().length &&
            video2.trim().length &&
            about.trim().length > 10 &&
            surname.trim().length &&
            isAgree
        ) {
            setCanSend(true)
        } else {
            setCanSend(false)
        }
    }, [form, isAgree])


    const modalRef = useRef()

    const onToggleTermsModal = () => {
        if (!termsModalIsOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        setTermsModalIsOpen(!termsModalIsOpen)
    }

    const closeModalFromOverlay = e => {
        if (e.target == modalRef.current) return
        onToggleTermsModal()
    }

    const sendForm = async () => {
        try {
            const response = await request('https://lbefree.com/api/casting/new', 'POST', form)
            if (response.status) {
                clearError()
                setDone(true)
                setTimeout(() => setDone(false), 3000)
            }
        } catch (err) {
            const resErrors = err.response.data.errors
            setErrors({ ...errors, ...resErrors })
        }
    }

    const toggleIsAgree = () => setIsAgree(!isAgree)

    const clearError = () =>
        setErrors({
            name: [''],
            email: [''],
            phone: [''],
            video1: [''],
            video2: [''],
            about: [''],
            surname: ['']
        })

    const changeHandler = e => setForm({ ...form, [e.target.name]: e.target.value })

    const phoneChange = value => setForm({ ...form, phone: value })

    return (
        <>
            <div className="error_wrapper">
                {Object.values(errors).map(err => {
                    if (err.length > 0) {
                        return <p className="input_error error_visible">{err}</p>
                    }
                })}
            </div>
            <div className="casting_form-wrapper">
                <div
                    onClick={closeModalFromOverlay}
                    className={termsModalIsOpen ? "overlay overlay-active" : "overlay"}
                />
                <div ref={modalRef}>
                    {termsModalIsOpen && <TermsModal closeModal={onToggleTermsModal} show={termsModalIsOpen} />}
                </div>
                <div className="befree-col casting__c-1">
                    <Input error={!!errors.name[0].length && !!errors.name[0] ? errors.name[0] : null} name="name" placeholder={t('name')} changeHandler={changeHandler} />
                    <Input error={!!errors.surname[0].length && !!errors.surname[0] ? errors.surname[0] : null} name="surname" placeholder={t('surname')} changeHandler={changeHandler} />
                    <Input error={!!errors.email[0].length && !!errors.email[0] ? errors.email[0] : null} name="email" placeholder={t('email')} changeHandler={changeHandler} />
                    <PhoneField changeHandler={phoneChange} phoneValue={form.phone} />
                </div>
                <div className="befree-col casting__c-2">
                    <LongInput error={!!errors.video1[0].length && !!errors.video1[0] ? errors.video1[0] : null} name="video1" placeholder={t('link.video')} changeHandler={changeHandler} />
                    <LongInput error={!!errors.video2[0].length && !!errors.video2[0] ? errors.video2[0] : null} name="video2" placeholder={t('link.video')} changeHandler={changeHandler} />
                    <textarea
                        onChange={changeHandler}
                        className={!!errors.about[0].length > 0 ? "long-input-casting input-error" : "long-input-casting"}
                        name="about"
                        type="text"
                        placeholder={t('transmittalLater')}
                    />
                </div>
            </div>
            <div style={{ width: '70%', marginTop: '20px', marginBottom: '14px' }}>
                {t('casting.page.end')}
            </div>
            <div className="casting_terms">
                <input type="checkbox" className="custom-checkbox" id="accept" />
                <label onClick={toggleIsAgree} htmlFor="accept"> {t('casting.checkbox')} </label>
                <p onClick={onToggleTermsModal} className="casting_terms-modal-button">Terms of agreement</p>
            </div>



            {loading ? <Spinner /> : <Button onClick={sendForm} disabled={!canSend} title={t('send')} />}
        </>
    )
}

export default CastingForm
