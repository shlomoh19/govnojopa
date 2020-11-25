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
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2855 0H8.71453C3.90932 0 0 3.90932 0 8.71453V21.2855C0 26.0907 3.90932 30 8.71453 30H21.2855C26.0907 30 30 26.0907 30 21.2855V8.71453C30 3.90932 26.0907 0 21.2855 0ZM27.6562 21.2855C27.6562 24.7983 24.7983 27.6562 21.2855 27.6562H8.71453C5.20166 27.6562 2.34375 24.7983 2.34375 21.2855V8.71453C2.34375 5.20166 5.20166 2.34375 8.71453 2.34375H21.2855C24.7983 2.34375 27.6562 5.20166 27.6562 8.71453V21.2855Z" fill="#384786" />
                <path d="M15 6.91406C10.5414 6.91406 6.91406 10.5414 6.91406 15C6.91406 19.4586 10.5414 23.0859 15 23.0859C19.4586 23.0859 23.0859 19.4586 23.0859 15C23.0859 10.5414 19.4586 6.91406 15 6.91406ZM15 20.7422C11.8338 20.7422 9.25781 18.1662 9.25781 15C9.25781 11.8338 11.8338 9.25781 15 9.25781C18.1662 9.25781 20.7422 11.8338 20.7422 15C20.7422 18.1662 18.1662 20.7422 15 20.7422Z" fill="#384786" />
                <path d="M23.2031 7.96875C23.8503 7.96875 24.375 7.44408 24.375 6.79688C24.375 6.14967 23.8503 5.625 23.2031 5.625C22.5559 5.625 22.0312 6.14967 22.0312 6.79688C22.0312 7.44408 22.5559 7.96875 23.2031 7.96875Z" fill="#384786" />
              </svg>

              <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.517727 12.995L7.85398 16.6512C8.13773 16.7912 8.47273 16.7812 8.74398 16.6225L15.274 12.8262L11.3215 16.3287C11.1202 16.5075 11.0052 16.7625 11.0052 17.0312V25.5625C11.0052 26.4625 12.154 26.8412 12.6927 26.1262L15.864 21.91L23.7065 26.3762C24.2565 26.6925 24.9615 26.375 25.089 25.7462L29.9802 1.37124C30.1265 0.638743 29.3977 0.0412433 28.7202 0.313743L0.595227 11.2825C-0.159773 11.5775 -0.208523 12.6337 0.517727 12.995ZM27.8052 2.68374L23.5065 24.105L16.0752 19.8725C15.6702 19.6412 15.149 19.7437 14.8615 20.1237L12.8802 22.7575V17.4525L23.569 7.98249C24.4152 7.23374 23.4427 5.90249 22.4765 6.46999L8.23898 14.7475L3.24898 12.2612L27.8052 2.68374Z" fill="#384786" />
              </svg>
              <svg width="41" height="28" viewBox="0 0 41 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.3253 11.925L17.6603 7.63149C17.162 7.38462 16.5732 7.39384 16.0848 7.65588C15.5961 7.91819 15.3047 8.38157 15.3047 8.8959V17.4091C15.3047 17.921 15.5943 18.3836 16.0797 18.6462C16.3332 18.7833 16.6141 18.8521 16.8957 18.8521C17.1537 18.8521 17.4122 18.7944 17.6501 18.6784L26.3154 14.4589C26.8298 14.2083 27.1509 13.724 27.1532 13.1948C27.1553 12.6656 26.8382 12.1791 26.3253 11.925ZM17.6031 16.3382V9.9755L24.0792 13.1845L17.6031 16.3382Z" fill="#384786" />
                <path d="M40.1847 6.41571L40.1829 6.39928C40.1486 6.11041 39.8073 3.54095 38.3983 2.23404C36.7697 0.696854 34.9234 0.510113 34.0354 0.420577C33.9619 0.413184 33.8946 0.406338 33.8343 0.399219L33.7636 0.392648C28.4117 0.0476435 20.3293 0.000547626 20.2483 0.000273813L20.2412 0L20.2341 0.000273813C20.1532 0.000547626 12.0707 0.0476435 6.67069 0.392648L6.59934 0.399219C6.5419 0.406064 6.47858 0.412362 6.40971 0.419481C5.53193 0.509292 3.70536 0.696306 2.07212 2.28908C0.730137 3.58202 0.342213 6.09644 0.302371 6.37902L0.297738 6.41571C0.285693 6.53591 0 9.39753 0 12.2704V14.9559C0 17.8288 0.285693 20.6904 0.297738 20.8109L0.2999 20.8289C0.334183 21.1132 0.675161 23.6355 2.07768 24.943C3.60899 26.4287 5.54522 26.6253 6.58668 26.731C6.7513 26.7477 6.89307 26.7619 6.98974 26.777L7.08332 26.7885C10.1734 27.0492 19.862 27.1776 20.2727 27.1828L20.2851 27.183L20.2975 27.1828C20.3784 27.1825 28.4605 27.1354 33.8124 26.7904L33.8831 26.7838C33.9508 26.7759 34.0268 26.7688 34.1101 26.7611C34.983 26.679 36.7997 26.5084 38.4104 24.9372C39.7523 23.644 40.1406 21.1296 40.1801 20.8473L40.1847 20.8106C40.1968 20.6901 40.4828 17.8288 40.4828 14.9559V12.2704C40.4825 9.39753 40.1968 6.53619 40.1847 6.41571ZM38.1101 14.9559C38.1101 17.6149 37.8482 20.3533 37.8235 20.6047C37.7228 21.2972 37.3136 22.888 36.6598 23.5181C35.6516 24.5013 34.6161 24.5988 33.86 24.6697C33.7686 24.6782 33.6839 24.6864 33.6073 24.6949C28.4309 25.0268 20.6536 25.0777 20.2953 25.0796C19.8935 25.0744 10.3467 24.9449 7.35079 24.6982C7.19729 24.676 7.03143 24.659 6.85662 24.6415C5.96989 24.5514 4.75609 24.4282 3.82272 23.5181L3.80079 23.4972C3.15837 22.9039 2.76087 21.4163 2.65987 20.6129C2.64103 20.4229 2.37233 17.6522 2.37233 14.9559V12.2704C2.37233 9.61439 2.63362 6.879 2.65895 6.62244C2.77909 5.80675 3.19605 4.31228 3.82272 3.70825C4.86171 2.69514 5.95723 2.58288 6.68181 2.50867C6.75099 2.50155 6.81554 2.49498 6.87515 2.48814C12.127 2.15463 19.9602 2.10507 20.2412 2.10316C20.5223 2.1048 28.3527 2.15463 33.5579 2.48814C33.6218 2.49526 33.6916 2.50238 33.7667 2.51004C34.512 2.58534 35.6384 2.69925 36.6721 3.67676L36.6817 3.68579C37.3241 4.27915 37.7216 5.79278 37.8226 6.61231C37.8405 6.79165 38.1101 9.56839 38.1101 12.2704V14.9559Z" fill="#384786" />
              </svg>

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
