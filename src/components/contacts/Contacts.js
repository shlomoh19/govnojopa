import React, { useState, useEffect } from 'react'
import Button from '../../UI/components/button/Button'
import Input from '../../UI/components/input/Input'
import Textarea from '../../UI/components/textarea/Textarea'
import PhoneInput from '../../UI/components/phone/PhoneInput'
import Spinner from '../spinner/Spinner'
import DonePage from '../done/Done'
import { useHttp } from '../../hooks/hook.http'
import { useTranslation } from "react-i18next"
import './Contacts.scss'
import InstagramIcon from '../../UI/icons/InstagramIcon'
import YoutubeIcon from '../../UI/icons/YoutubeIcon'
import FacebookIcon from '../../UI/icons/FacebookIcon'
import TwitterIcon from '../../UI/icons/TwitterIcon'
import TikTokIcon from '../../UI/icons/TikTokIcon'


const Contacts = ({ done, setDone }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    about: ''
  })

  const [canSend, setCanSend] = useState()

  const { request, loading } = useHttp()

  useEffect(() => {
    const { name, email, phone, about } = form
    if (
      name.trim().length &&
      email.trim().length &&
      phone.length &&
      about.trim().length
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
    const response = await request('/feedback', 'POST', form)
    if (response.ok) {
      setDone(true)
    }
  }


  return (
    <>
      {done
        ? <DonePage />
        : (
          <div className="contacts-container">
            <h2 className="contacts-title"> {t('contacts')} </h2>
            <p>SHAPALERNAYA, 2, ST. PETERSBURG, RUSSIA</p>
            <p>8-(800)-555-35-55</p>
            <p>OURMAIL@GMAIL.COM</p>
            <div className="contacts__icon-wrapper">
              <FacebookIcon href="https://www.facebook.com/casadelilit" />
              <InstagramIcon href="https://www.instagram.com/casadelili/" />
              <TwitterIcon href="https://twitter.com/goalbefree" />
              <YoutubeIcon href="https://www.youtube.com/channel/UCAZFH1xkBWGn5EbbGuqYcGA" />
              <TikTokIcon href="www.tiktok.com/@goalbefree" />
            </div>

            <h1 className="contacts-title"><span className="befree-title-blue">
              {t('contacts.title.blue')}</span> {t('contacts.title')}
            </h1>
            <p className="contacts-text-grey" style={{ marginBottom: '50px', color: 'black' }}>
              {t('contacts.text')}
            </p>

            <form onSubmit={sendForm} className="contacts-form-container">
              <div className="contacts-flex">
                <div className="contacts-col contacts__c-1">
                  <Input name="name" placeholder={t('name')} changeHandler={changeHandler} />
                  <Input name="email" placeholder={t('email')} changeHandler={changeHandler} />
                  <PhoneInput changeHandler={phoneChange} phoneValue={form.phone} />
                </div>
                <div className="contacts-col contacts__c-2">
                  <Textarea name="about" placeholder={t('transmittalLater')} changeHandler={changeHandler} />
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
