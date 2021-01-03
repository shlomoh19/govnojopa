import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import './more-info-casting.scss'
import '../../../components/be-free/components/casting/Casting.scss'
import '../../../components/be-free/Be-free.scss'
import ArrowDownIcon from '../../icons/ArrowDownIcon';


const CastingInfo = () => {
    const [isOpenMoreInfo, setIsOpenMoreInfo] = useState(false);
    const { t } = useTranslation()

    const toggleMoreInfo = () => setIsOpenMoreInfo(!isOpenMoreInfo)

    return (
        <div className="befree-container">
            <h2 className="befree-title">
                {t('casting.title') + ' '}
                <span className="befree-title-blue">
                    {t('casting.title.blue')}
                </span>
            </h2>
            <p className="befree_date">
                20.01.2021 - 20.04.2021
            </p>
            <p className="befree-text-casting">
                {
                    t('casting.text.one') +
                    t('casting.text.two') +
                    t('casting.text.three') +
                    t('casting.text.four')
                }
            </p>
            <span className={"casting_steps-title"}>{t('casting.steps.title')}</span>
            <div className={"casting_steps-body"}>
                <p>
                    <span className="casting_steps-num">
                        {t('casting.steps.nums.one') + ' '}
                    </span>
                    {t('casting.steps.text.1')}
                </p>
                <p>
                    <span className="casting_steps-num">
                        {t('casting.steps.nums.two') + ' '}
                    </span>
                    {t('casting.steps.text.2')}
                </p>
                <p>
                    <span className="casting_steps-num">
                        {t('casting.steps.nums.three') + ' '}
                    </span>
                    {t('casting.steps.text.3')}
                </p>
            </div>
            <div className={isOpenMoreInfo
                ? "casting_moreInfo casting_moreInfo-visible"
                : "casting_moreInfo"}
            >
                <div className={"casting_moreInfo_item"}>
                    <p className={"casting_moreInfo_title"}> {t('casting.moreInfo.videoReq.title')} </p>
                    <p> {t('casting.moreInfo.videoReq.one')} </p>
                    <p> {t('casting.moreInfo.videoReq.two')} </p>
                    <p> {t('casting.moreInfo.videoReq.three')} </p>
                    <p> {t('casting.moreInfo.videoReq.four')} </p>
                </div>

                <div className={"casting_moreInfo_item"}>
                    <p className={"casting_moreInfo_title"}> {t('casting.moreInfo.videoContent.title')} </p>
                    <p> {t('casting.moreInfo.videoContent.one')} </p>
                    <p> {t('casting.moreInfo.videoContent.two')} </p>
                    <p> {t('casting.moreInfo.videoContent.three')} </p>
                    <p> {t('casting.moreInfo.videoContent.four')} </p>
                    <p> {t('casting.moreInfo.videoContent.five')} </p>
                </div>

                <div className={"casting_moreInfo_item"}>
                    <p className={"casting_moreInfo_title"}> {t('casting.moreInfo.goalkeeper.title')} </p>
                    <p> {t('casting.moreInfo.goalkeeper.one')} </p>
                    <p> {t('casting.moreInfo.goalkeeper.two')} </p>
                    <p> {t('casting.moreInfo.goalkeeper.three')} </p>
                    <p> {t('casting.moreInfo.goalkeeper.four')} </p>
                </div>

                <div className={"casting_moreInfo_item"}>
                    <p className={"casting_moreInfo_title"}> {t('casting.moreInfo.soccer.title')} </p>
                    <p> {t('casting.moreInfo.soccer.one')} </p>
                    <p> {t('casting.moreInfo.soccer.two')} </p>
                    <p> {t('casting.moreInfo.soccer.three')} </p>
                    <p> {t('casting.moreInfo.soccer.four')} </p>
                    {/* <p> {t('casting.moreInfo.soccer.five')} </p> */}
                </div>
            </div>
            <p className={"casting_more-info"} onClick={toggleMoreInfo}>
                <span> {isOpenMoreInfo ? 'HIDE' : t('casting.moreInfo.text')} </span>
                <ArrowDownIcon
                    style={isOpenMoreInfo
                        ? { marginLeft: '10px', transform: 'rotate(180deg)' }
                        : { marginLeft: '10px' }
                    } />
            </p>
        </div>
    )
}

export default CastingInfo
