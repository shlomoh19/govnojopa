import React, {useEffect} from 'react'
import {smoothJumpUp} from "../../utils/scroll-utils";
import './faq-page.scss'

const FaqPage = () => {
    useEffect(() => {
        smoothJumpUp()
    }, [])
    return (
        <div className="faq__wrapper">
            <h1 className="faq__title">FREQUENTLY ASKED QUESTIONS</h1>
            <p className="faq__question">At what age can I participate in casting?</p>
            <p className="faq__answer">- You can participate if you are 18 years old or if you will be at 18 years old at the end of the casting. We do not have requirements for the upper age limited. But all those who pass the qualifying round will definitely undergo for a medical examination.</p>
            <p className="faq__question"> People from which countries can take part in the casting?</p>
            <p className="faq__answer">- From any country.</p>
            <p className="faq__question">Can I take part in the casting if I am a girl?</p>
            <p className="faq__answer">- At this moment we have an online casting for the international world team for men's football team. We are in a development phase, we will try to provide the same opportunity for women's football in the near future.</p>
        </div>
    )
}

export default FaqPage;
