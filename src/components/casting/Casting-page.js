import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import moment from "moment";
import CastingInfo from "../../UI/components/more-info-casting/more-info.casting";
import CastingForm from "../../UI/components/casting-form/casting-form";
import DonePage from '../done/Done';
import { useTranslation } from 'react-i18next';
import { useHttp } from '../../hooks/hook.http';
import SimpleVideo from '../home/video/Simple-video';
import CastingPoster from '../../files/castingImage.jpg';

import './Casting-page.scss'
import 'react-circular-progressbar/dist/styles.css';

const CastingPage = ({ done, setDone }) => {
    const [percent, setPercent] = useState(0)
    const [daysToEnd, setDaysToEnd] = useState(0)
    const [hoursToEnd, setHoursToEnd] = useState(0)

    const [alreadyRegistered, setAlreadyRegistered] = useState(0)

    const { t } = useTranslation()

    const { request } = useHttp()

    useEffect(() => {
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

        request('http://lbefree.com/api/casting/counts/all').then(res => setAlreadyRegistered(res))
    }, []);


    return (
        <div style={{marginTop: '50px'}}>
            {done
                ? <DonePage />
                : <>
                    <SimpleVideo image={CastingPoster} videoURL="http://lbefree.com/storage/casting/casting.mp4" title="casting-page" />
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontWeight: '400', fontSize: '30px' }}> {alreadyRegistered} </h2>
                        <span> {t('casting.already.registred')} </span>
                        <div className={"circle-flex"}>
                            <div className={'circle-item'}>
                                <CircularProgressbar
                                    value={percent}
                                    text={daysToEnd}
                                    className={"circle"}
                                    strokeWidth={'3'}
                                    styles={buildStyles({
                                        textSize: '30px',
                                        pathColor: '#384786'
                                    })}
                                />
                                <span> {t('days')} </span>
                            </div>
                            <div className={'circle-item'}>
                                <CircularProgressbar
                                    value={percent}
                                    text={hoursToEnd}
                                    className={"circle"}
                                    strokeWidth={'3'}
                                    styles={buildStyles({
                                        textSize: '30px',
                                        pathColor: '#384786'
                                    })}
                                />
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
