import React, { useState, useEffect } from 'react'
import Input from "../../../../UI/components/input/Input";
import Button from "../../../../UI/components/button/Button";
import { useHttp } from '../../../../hooks/hook.http.js';
import Spinner from '../../../spinner/Spinner';
import { useTranslation } from "react-i18next";
import './Follow.scss'


function Follow({ setDone }) {
  const [form, setForm] = useState({
    name: '',
    email: ''
  })
  const [canSend, setCanSend] = useState(false)
  const [errors, setErrors] = useState({
    name: [''],
    email: ['']
  })

  const { t } = useTranslation()

  useEffect(() => {
    if (form.name.trim().length && form.email.trim().length) {
      setCanSend(true)
    } else {
      setCanSend(false)
    }
  }, [form])

  const { request, loading } = useHttp()

  const sendForm = async () => {
    try {
      const response = await request('https://lbefree.com/api/casting/subscribe', 'POST', form)
      if (response.status) {
        clearErrors()
        setDone(true)
        setTimeout(() => setDone(false), 3000)
      }
    } catch (err) {
      const resErrors = err.response?.data.errors
      setErrors({ ...errors, ...resErrors })
    }
  }

  const formChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const clearErrors = () =>
    setErrors({
      name: [''],
      email: ['']
    })

  return (
    <form className="follow" onSubmit={sendForm}>
      <h2 className="follow__title">
        <span className="befree-title-blue">{t('follow.title.blue')} {' '}</span>{t('follow.title')}
      </h2>
      <div className="error_wrapper">
        {Object.values(errors).map(err => {
          if (err.length > 0) {
            return <p className="input_error error_visible">{err}</p>
          }
        })}
      </div>

      <Input
        error={!!errors.name[0].length && !!errors.name[0] ? errors.name[0] : null}
        changeHandler={formChange}
        name="name"
        placeholder={t('name')}
      />
      <Input
        error={!!errors.email[0].length && !!errors.email[0] ? errors.email[0] : null}
        changeHandler={formChange}
        name="email"
        placeholder={t('email')}
      />
      {loading ? <Spinner /> : <Button onClick={sendForm} disabled={!canSend} title={t('send')} />}
    </form>
  )
}

export default Follow
