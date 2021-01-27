import React, { useState, useEffect } from 'react'
import Button from '../../UI/components/button/Button'
import Input from '../../UI/components/input/Input'
import Textarea from '../../UI/components/textarea/Textarea'
import PhoneInput from '../../UI/components/phone/PhoneInput'
import Spinner from '../spinner/Spinner'
import DonePage from '../done/Done'
import { useHttp } from '../../hooks/hook.http'
import { useTranslation } from "react-i18next"
import InstagramIcon from '../../UI/icons/InstagramIcon'
import YoutubeIcon from '../../UI/icons/YoutubeIcon'
import FacebookIcon from '../../UI/icons/FacebookIcon'
import TwitterIcon from '../../UI/icons/TwitterIcon'
import TikTokIcon from '../../UI/icons/TikTokIcon'
import { smoothJumpUp } from '../../utils/scroll-utils'
import { validateEmail } from '../../utils/validate-utils'
import phone from 'phone' 

import './Contacts.scss'
 
const Contacts = ({ done, setDone }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    about: ''
  })
  const [canSend, setCanSend] = useState()
  const [errors, setErrors] = useState({
    name: [''],
    email: [''],
    phone: [''],
    about: ['']
  })

  useEffect(() => {
    smoothJumpUp()
  }, [])

  const { request, loading } = useHttp()

  useEffect(() => {
    const { name, email, phone, about } = form
    if (
      name.trim().length &&
      email.trim().length &&
      phone.length &&
      about.trim().length > 10
    ) {
      setCanSend(true)
    } else {
      setCanSend(false)
    }
  }, [form])

  const phoneChange = value => setForm({ ...form, phone: value })

  const { t } = useTranslation()

  const changeHandler = e => setForm({ ...form, [e.target.name]: e.target.value })

  const sendForm = async () => {
    try {
      if (phone(form.phone, '').length > 0) {
        if (validateEmail(form.email)) {
          const response = await request('https://lbefree.com/api/casting/feedback', 'POST', form)
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
          phone: ['Phone number is not valid!']
        })
      }
      
    } catch (err) {
      const resErrors = err.response.data.errors
      setErrors({ ...errors, ...resErrors })
    }
  }

  const clearError = () =>
    setErrors({
      name: [''],
      email: [''],
      phone: [''],
      about: ['']
    })

  return (
    <>
      {done
        ? <DonePage />
        : (
          <div className="contacts-container">
            <h2 className="contacts-title"> {t('contacts')} </h2>
            <p>Kemp House, 160 City Road, </p>
            <p>EC1V 2NX,</p>
            <p>London,</p>
            <p>United Kingdom.</p>
            <p className="contacts_email">GOAL@LBEFREE.COM</p>
            <div className="contacts__icon-wrapper">
              <FacebookIcon href="https://www.facebook.com/lbefree/" />
              <InstagramIcon href="https://www.instagram.com/goalbefree/" />
              <TwitterIcon href="https://twitter.com/goalbefree" />
              <YoutubeIcon href="https://www.youtube.com/channel/UCzqeMkwLXZH__kqgEXdmqjg" />
              <TikTokIcon href="www.tiktok.com/@goalbefree" />
            </div>

            <h1 className="contacts-title">
              <span className="befree-title-blue">
                {t('contacts.title.blue')} {' '}
              </span>
              {t('contacts.title')}
            </h1>

            <p className="contacts-text-grey" style={{ marginBottom: '50px', color: 'black' }}>
              {t('contacts.text')}
              {Object.values(errors).map(err => {
                if (err.length > 0) {
                  return <p style={{ color: '#c52e3b' }} className="input_error error_visible">{err}</p>
                }
              })}
            </p>

            <form onSubmit={sendForm} className="contacts-form-container">
              <div className="contacts-flex">
                <div className="contacts-col contacts__c-1">
                  <Input value={form.name} error={!!errors.name[0].length && !!errors.name[0] ? errors.name[0] : null} name="name" placeholder={t('name')} changeHandler={changeHandler} />
                  <Input value={form.email} error={!!errors.email[0].length && !!errors.email[0] ? errors.email[0] : null} name="email" placeholder={t('email')} changeHandler={changeHandler} />
                  <PhoneInput placeholder={t('phone')} changeHandler={phoneChange} phoneValue={form.phone} />
                </div>
                <div className="contacts-col contacts__c-2">
                  <Textarea value={form.about} error={!!errors.about[0].length && !!errors.about[0] ? errors.about[0] : null} name="about" placeholder={t('transmittalLater')} changeHandler={changeHandler} />
                </div>
              </div>
              {loading ? <Spinner /> : <Button disabled={!canSend} onClick={sendForm} title={t('send')} />}
            </form>
          </div>
        )}
    </>

  )
}

export default Contacts
