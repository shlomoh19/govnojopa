import React, { useEffect, useState } from 'react'
import moment from "moment";
import CastingInfo from "../../UI/components/more-info-casting/more-info.casting";
import CastingForm from "../../UI/components/casting-form/casting-form";
import DonePage from '../done/Done';
import { useTranslation } from 'react-i18next';
import { useHttp } from '../../hooks/hook.http';
import { smoothJumpUp } from '../../utils/scroll-utils';

import VideoJs from '../home/video/VideoJs';
import CircularProgressbar from '../../UI/components/circular-rogressbar/circular-progressbar';
import './Casting-page.scss'

const CastingPage = ({ done, setDone }) => {
    const [percent, setPercent] = useState(0)
    const [daysToEnd, setDaysToEnd] = useState(0)
    const [hoursToEnd, setHoursToEnd] = useState(0)

    const [alreadyRegistered, setAlreadyRegistered] = useState(0)

    const { t } = useTranslation()
    const { request } = useHttp()
    const CastingPoster = 'https://lbefree.com/storage/casting/castingImage.jpg';

    useEffect(() => {
        smoothJumpUp()
        const castingStartDay = moment('2020-10-1');
        const now = moment(new Date());
        const end = moment("2021-02-28");
        const durationDaysToEnd = moment.duration(end.diff(now));
        const daysToEnd = durationDaysToEnd.asDays();
        const hoursToEnd = durationDaysToEnd.asHours();
        setDaysToEnd(Math.round(daysToEnd));
        setHoursToEnd(Math.round(hoursToEnd));
        const durationAllDays = moment.duration(end.diff(castingStartDay)).asDays();
        const completePercent = 100 - (daysToEnd * 100 / durationAllDays);
        setPercent(completePercent)

        request('https://lbefree.com/api/casting/counts/all').then(res => setAlreadyRegistered(res))
    }, []);


    return (
        <div style={{ marginTop: '50px' }}>
            {done
                ? <DonePage />
                : <>
                    <VideoJs
                        title="casting-page"
                        videoURL="https://lbefree.com/storage/casting/casting.mp4"
                        image={CastingPoster}
                    />
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontWeight: '400', fontSize: '30px' }}> {alreadyRegistered} </h2>
                        <span> {t('casting.already.registred')} </span>
                        <div className={"circle-flex"}>
                            <div className={'circle-item'}>
                                <CircularProgressbar title={daysToEnd} percent={percent} />
                                <span> {t('days')} </span>
                            </div>
                            <div className={'circle-item'}>
                                <CircularProgressbar title={hoursToEnd} percent={percent} />
                                <span> {t('hours')} </span>
                            </div>
                        </div>
                    </div>
                    <div className="befree-container">
                        <CastingInfo />
                        <CastingForm setDone={setDone} />
                    </div>
                </>}
        </div>
    )
}

export default CastingPage;
