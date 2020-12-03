import React, { useState, useEffect } from 'react'
import Input from "../../../../UI/components/input/Input";
import Button from "../../../../UI/components/button/Button";
import { useHttp } from '../../../../hooks/hook.http.js';
import Spinner from '../../../spinner/Spinner';
import {useTranslation} from "react-i18next";
import './Follow.scss'


function Follow({ setDone }) {
  const [form, setForm] = useState({
    name: '',
    email: ''
  })
  const [canSend, setCanSend] = useState(false)

  const {t} = useTranslation()

  useEffect(() => {
    if (form.name.trim().length && form.email.trim().length) {
      setCanSend(true)
    } else {
      setCanSend(false)
    }
  }, [form])

  const { request, loading } = useHttp()

  const sendForm = async () => {
    const response = await request('http://lbefree.com/api/casting/subscribe', 'POST', form)
    if (response.ok) {
      setDone(true)
    }
  }

  const formChange = e => setForm({ ...form, [e.target.name]: e.target.value })


  return (
    <form className="follow" onSubmit={sendForm}>
      <h2 className="follow__title">
        <span className="befree-title-blue">{t('follow.title.blue')} {' '}</span>{t('follow.title')}
      </h2>
      <Input changeHandler={formChange} name="name" placeholder={t('name')} />
      <Input changeHandler={formChange} name="email" placeholder={t('email')} />
      {loading ? <Spinner /> : <Button onClick={sendForm} disabled={!canSend} title={t('send')} />}
    </form>
  )
}

export default Follow
