import React, {useEffect} from 'react'
import {smoothJumpUp} from "../../utils/scroll-utils";
import './faq-page.scss'
import {useTranslation} from "react-i18next";

const FaqPage = () => {
    const {t} = useTranslation()

    useEffect(() => {
        smoothJumpUp()
    }, [])
    return (
        <div className="faq__wrapper">
            <h1 className="faq__title">{t("faq.title")}</h1>
            <p className="faq__question">{t("faq.q1")}</p>
            <p className="faq__answer">{t("faq.a1")}</p>
            <p className="faq__question">{t("faq.q2")}</p>
            <p className="faq__answer">{t("faq.a2")}</p>
            <p className="faq__question">{t("faq.q3")}</p>
            <p className="faq__answer">{t("faq.a3")}</p>
        </div>
    )
}

export default FaqPage;
