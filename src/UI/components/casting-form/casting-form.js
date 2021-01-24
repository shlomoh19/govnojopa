import React, {useEffect, useState, useRef} from 'react'
import Input from "../input/Input";
import PhoneField from "../phone/PhoneInput";
import LongInput from "../long-input/Long-input";
import Spinner from "../../../components/spinner/Spinner";
import Button from "../button/Button";
import {useTranslation} from "react-i18next";
import {useHttp} from "../../../hooks/hook.http";
import TermsComponent from './terms-component';
import './casting-form.scss'
import '../../../components/be-free/components/casting/Casting.scss'
import '../../../components/be-free/Be-free.scss'
import '../../../components/be-free/components/join/JoinTheTeam.scss'
import './casting-textArea.scss'
import {validateEmail} from '../../../utils/validate-utils';
import phone from 'phone'

const CastingForm = ({setDone}) => {
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


    const {t} = useTranslation()

    const {request, loading} = useHttp()

    useEffect(() => {
        const {name, email, phone, video1, video2, about, surname} = form
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

    const onToggleTermsModal = () => setTermsModalIsOpen(!termsModalIsOpen)


    const sendForm = async () => {
        clearError()
        try {
            if (phone(form.phone, '').length > 0) {
                if (validateEmail(form.email)) {
                    const response = await request('https://lbefree.com/api/casting/new', 'POST', form)
                    if (response.status) {
                        clearError()
                        setDone(true)
                        setTimeout(() => setDone(false), 3000)
                    }
                } else {
                    setErrors({
                        ...errors,
                        email: ['Email is not valid!']
                    })
                }
            } else {
                setErrors({
                    ...errors,
                    phone: ['Phone is not valid!']
                })
            }
        } catch (err) {
            const resErrors = err.response.data.errors
            setErrors({...errors, ...resErrors})
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

    const changeHandler = e => setForm({...form, [e.target.name]: e.target.value})

    const phoneChange = value => setForm({...form, phone: value})

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
                <TermsComponent
                    termsModalIsOpen={termsModalIsOpen}
                    onToggleTermsModal={onToggleTermsModal}
                />
                <div className="befree-col casting__c-1">
                    <Input value={form.name} error={!!errors.name[0].length && !!errors.name[0] ? errors.name[0] : null}
                           name="name" placeholder={t('name')} changeHandler={changeHandler}/>
                    <Input value={form.surname}
                           error={!!errors.surname[0].length && !!errors.surname[0] ? errors.surname[0] : null}
                           name="surname" placeholder={t('surname')} changeHandler={changeHandler}/>
                    <Input value={form.email}
                           error={!!errors.email[0].length && !!errors.email[0] ? errors.email[0] : null} name="email"
                           placeholder={t('email')} changeHandler={changeHandler}/>
                    <PhoneField placeholder={t('phone')} changeHandler={phoneChange} phoneValue={form.phone}/>
                </div>
                <div className="befree-col casting__c-2">
                    <LongInput value={form.video1}
                               error={!!errors.video1[0].length && !!errors.video1[0] ? errors.video1[0] : null}
                               name="video1" placeholder={t('link.video')} changeHandler={changeHandler}/>
                    <LongInput value={form.video2}
                               error={!!errors.video2[0].length && !!errors.video2[0] ? errors.video2[0] : null}
                               name="video2" placeholder={t('link.video')} changeHandler={changeHandler}/>
                    <div className="field_wrapper">
                        <label htmlFor={`input_${form.about}`} className={
                            form.about?.trim().length <= 0
                                ? "field_placeholder visible"
                                : "field_placeholder"
                        }
                        >{t('transmittalLater')}</label>
                        <textarea
                            onChange={changeHandler}
                            className={!!errors.about[0].length > 0 ? "long-input-casting input-error" : "long-input-casting"}
                            name="about"
                            type="text"
                        />
                    </div>

                </div>
            </div>
            <div style={{width: '70%', marginTop: '20px', marginBottom: '14px'}}>
                {t('casting.page.end')}
            </div>
            <div className="casting_terms">
                <input type="checkbox" className="custom-checkbox" id="accept"/>
                <label onClick={toggleIsAgree} htmlFor="accept"> {t('casting.checkbox')} </label>
                <p onClick={onToggleTermsModal} className="casting_terms-modal-button">Terms of agreement</p>
            </div>


            {loading ? <Spinner/> : <Button onClick={sendForm} disabled={!canSend} title={t('send')}/>}
        </>
    )
}

export default CastingForm
