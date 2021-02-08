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
            <p className="faq__question">{t("faq.q4")}</p>
            <p className="faq__answer">{t("faq.a4")}</p>
            <p className="faq__question">{t("faq.q5")}</p>
            <p className="faq__answer">{t("faq.a5")}</p>
            <p className="faq__question">{t("faq.q6")}</p>
            <p className="faq__answer">{t("faq.a6")}</p>
            <p className="faq__question">{t("faq.q7")}</p>
            <p className="faq__answer">{t("faq.a7")}</p>
            <p className="faq__question">{t("faq.q8")}</p>
            <p className="faq__answer">{t("faq.a8.1")}</p>
            <p className="faq__question">{t("faq.a8.2")}</p>
            <p className="faq__answer">{t("faq.q9")}</p>
            <p className="faq__question">{t("faq.a9.1")}</p>
            <p className="faq__answer">{t("faq.a9.2")}</p>
            <p className="faq__question">{t("faq.q10")}</p>
            <p className="faq__answer">{t("faq.a10")}</p>
            <p className="faq__question">{t("faq.q11")}</p>
            <p className="faq__answer">{t("faq.a12")}</p>
            <p className="faq__question">{t("faq.q13")}</p>
            <p className="faq__answer">{t("faq.a13")}</p>
            <p className="faq__question">{t("faq.q14.1")}</p>
            <p className="faq__answer">{t("faq.a14.1")}</p>
            <p className="faq__answer">{t("faq.a14.2")}</p>
            <p className="faq__answer">{t("faq.a14.3")}</p>
            <p className="faq__answer">{t("faq.a14.4")}</p>
            <p className="faq__answer">{t("faq.a14.5")}</p>
            <p className="faq__answer">{t("faq.a14.6")}</p>
            <p className="faq__answer">{t("faq.a14.7")}</p>
            <p className="faq__answer">{t("faq.a14.8")}</p>
            <p className="faq__answer">{t("faq.a14.9")}</p>
            <p className="faq__answer">{t("faq.a14.10")}</p>
            <p className="faq__answer">{t("faq.a14.11")}</p>
            <p className="faq__question">{t("faq.q15")}</p>
            <p className="faq__answer">{t("faq.a15")}</p>
            <p className="faq__question">{t("faq.q16")}</p>
            <p className="faq__answer">{t("faq.a16")}</p>
            <p className="faq__question">{t("faq.q17")}</p>
            <p className="faq__answer">{t("faq.a17")}</p>
            <p className="faq__question">{t("faq.q18")}</p>
            <p className="faq__answer">{t("faq.a18")}</p>
            <p className="faq__question">{t("faq.q19")}</p>
            <p className="faq__answer">{t("faq.a19")}</p>
            <p className="faq__question">{t("faq.q20")}</p>
            <p className="faq__answer">{t("faq.a20")}</p>
            <p className="faq__question">{t("faq.q21")}</p>
            <p className="faq__answer">{t("faq.a21")}</p>
            <p className="faq__question">{t("faq.q22")}</p>
            <p className="faq__answer">{t("faq.a22")}</p>
        </div>
    )
}

export default FaqPage;
