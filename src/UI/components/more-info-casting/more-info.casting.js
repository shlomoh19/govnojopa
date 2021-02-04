import React, {useState} from 'react'
import {useTranslation} from "react-i18next";
import './more-info-casting.scss'
import '../../../components/be-free/components/casting/Casting.scss'
import '../../../components/be-free/Be-free.scss'
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import Button from "../button/Button";
import Modal from "../casting-form/Modal";
import VideoJs from "../../../components/home/video/VideoJs";
import {NavLink} from "react-router-dom";
import InstructionVideo from '../../../files/InstructionVideo.mov';
import ExampleVideo from '../../../files/ExampleVideo.mov'
import InstructionVideoCover from '../../../files/InstructionVideoCover.jpg';
import ExampleVideoCover from '../../../files/ExampleVideoCover.jpg'


const CastingInfo = () => {
    const [isOpenMoreInfo, setIsOpenMoreInfo] = useState(false);
    const [modalVideoInstuctionIsOpen, setModalVideoInstuctionIsOpen] = useState(false)
    const [exampleVideoIsOpen, setExampleVideoIsOpen] = useState(false)

    const {t} = useTranslation()

    const toggleMoreInfo = () => setIsOpenMoreInfo(!isOpenMoreInfo)

    const toggleVideoInstructionModal = () =>
        setModalVideoInstuctionIsOpen(!modalVideoInstuctionIsOpen)
    const toggleExampleVideoModal = () =>
        setExampleVideoIsOpen(!exampleVideoIsOpen)

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

                <Button title="Посмотреть видео инструкцию" onClick={toggleVideoInstructionModal}/>
                <Modal
                    closeModal={toggleVideoInstructionModal}
                    show={modalVideoInstuctionIsOpen}
                    title={"Instruction"}
                >
                    <VideoJs
                        videoURL={InstructionVideo}
                        image={InstructionVideoCover}
                    />
                </Modal>

                <div className={"casting_moreInfo_item"}>
                    <p className={"casting_moreInfo_title"}> {t('casting.moreInfo.videoContent.title')} </p>
                    <p> {t('casting.moreInfo.videoContent.one')} </p>
                    <p> {t('casting.moreInfo.videoContent.two')} </p>
                    <p> {t('casting.moreInfo.videoContent.three')} </p>
                    <p> {t('casting.moreInfo.videoContent.four')} </p>
                    <p> {t('casting.moreInfo.videoContent.five')} </p>
                </div>

                <Button
                    title="Посмотреть пример видео кастинга"
                    onClick={toggleExampleVideoModal}
                />
                <Modal
                    closeModal={toggleExampleVideoModal}
                    show={exampleVideoIsOpen}
                    title={"Example"}
                >
                    <VideoJs
                        videoURL={ExampleVideo}
                        image={ExampleVideoCover}
                    />
                </Modal>

                <div className={"casting_moreInfo_item"}>
                    <p className={"casting_moreInfo_title"}> {t("casting.moreInfo.conditions.title")} </p>
                    <ul>
                        <li>{t('casting.moreInfo.conditions.1')}</li>
                        <li>{t('casting.moreInfo.conditions.2')}</li>
                        <li>{t('casting.moreInfo.conditions.3')}</li>
                        <li>{t('casting.moreInfo.conditions.4')}</li>
                        <li>{t('casting.moreInfo.conditions.5')}</li>
                        <li>{t('casting.moreInfo.conditions.6')}</li>
                        <li>{t('casting.moreInfo.conditions.7')}</li>
                        <li>{t('casting.moreInfo.conditions.8')}</li>
                        <li>{t('casting.moreInfo.conditions.9')}</li>
                        <li>{t('casting.moreInfo.conditions.10')}</li>
                        <li>{t('casting.moreInfo.conditions.11')}</li>
                        <li>{t('casting.moreInfo.conditions.12')}</li>
                        <li>{t('casting.moreInfo.conditions.13')}</li>
                        <li>{t('casting.moreInfo.conditions.14')}</li>
                        <li>{t('casting.moreInfo.conditions.15')}</li>
                        <li>{t('casting.moreInfo.conditions.16')}</li>
                        <li>{t('casting.moreInfo.conditions.17')}</li>
                        <li>{t('casting.moreInfo.conditions.18')}</li>
                    </ul>
                </div>

                <NavLink to="/faq">
                    <Button title="Часто задаваемые вопросы" />
                </NavLink>
            </div>

            <p className={"casting_more-info"} onClick={toggleMoreInfo}>
                <span> {isOpenMoreInfo ? 'HIDE' : t('casting.moreInfo.text')} </span>
                <ArrowDownIcon
                    style={isOpenMoreInfo
                        ? {marginLeft: '10px', transform: 'rotate(180deg)'}
                        : {marginLeft: '10px'}
                    }/>
            </p>
        </div>
    )
}

export default CastingInfo
