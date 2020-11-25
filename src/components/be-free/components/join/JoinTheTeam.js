import React, { useState, useEffect } from 'react'
import Button from '../../../../UI/components/button/Button'
import Input from '../../../../UI/components/input/Input'
import Textarea from '../../../../UI/components/textarea/Textarea'
import LongInput from '../../../../UI/components/long-input/Long-input'
import PhoneInput from '../../../../UI/components/phone/PhoneInput'
import './JoinTheTeam.scss'
import { useHttp } from '../../../../hooks/hook.http'
import Spinner from '../../../spinner/Spinner'
import {useTranslation} from "react-i18next"
import '../casting/Casting.scss'


const JoinTheTeam = ({ setDone }) => {
  const [form, setForm] = useState({
    name: '',
    summary: '',
    email: '',
    phone: '',
    link: '',
    about: ''
  })
  const [canSend, setCanSend] = useState()

  const { request, loading } = useHttp()

  const {t} = useTranslation()

  useEffect(() => {
    const { name, summary, email, phone, link, about } = form
    if (
      name.trim().length &&
      email.trim().length &&
      summary.trim().length &&
      phone.length &&
      link.trim().length &&
      about.trim().length
    ) {
      setCanSend(true)
    } else {
      setCanSend(false)
    }
  }, [form])

  const changeHandler = e => setForm({ ...form, [e.target.name]: e.target.value })

  const phoneChange = value => setForm({ ...form, phone: value })

  const sendForm = async () => {
    const response = await request('/join/team/', 'POST', form)
    if (response.ok) {
      setDone(true)
    }
  }

  return (
    <form onSubmit={sendForm} className="befree-container">
      <h2 className="befree-title"> {t('joinTheTeam.title')} <span className="befree-title-blue"> {t('joinTheTeam.title.blue')} </span></h2>
      <p className="befree-text">
        {
          t('joinTheTeam.text.one') + '' + 
          t('joinTheTeam.text.two') + '' +
          t('joinTheTeam.text.three')
        }
      </p>
      <div className="befree-flex">
        <div className="befree-col casting__c-1">
          <Input name="name" placeholder={t('name')} changeHandler={changeHandler} />
          <Input name="email" placeholder={t('email')} changeHandler={changeHandler} />
          <PhoneInput phoneValue={form.phone} changeHandler={phoneChange} />
          <Input name="link" placeholder="LINK TO PORTFOLIO" changeHandler={changeHandler} />
        </div>
        <div className="befree-col casting__c-2">
          <LongInput name="summary" placeholder={t('link.summary')} changeHandler={changeHandler} />
          <Textarea name="about" placeholder={t('transmittalLater')} changeHandler={changeHandler} />
        </div>
      </div>
      {loading ? <Spinner /> : <Button disabled={!canSend} onClick={sendForm} title={t('send')} />}
    </form>
  )
}

export default JoinTheTeam
