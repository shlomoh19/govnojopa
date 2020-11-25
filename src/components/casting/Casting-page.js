import React, { useEffect, useState } from 'react'
import './Casting-page.scss'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import moment from "moment";
import CastingInfo from "../../UI/components/more-info-casting/more-info.casting";
import 'swiper/swiper-bundle.min.css'


import Video from '../../video/rocky.webm'
import VideoWrapper from "../home/video/Video";
import CastingForm from "../../UI/components/casting-form/casting-form";
import DonePage from '../done/Done';

const CastingPage = ({ done, setDone }) => {
    const [percent, setPercent] = useState(0)
    const [daysToEnd, setDaysToEnd] = useState(0)
    const [hoursToEnd, setHoursToEnd] = useState(0)

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
        const complatePercent = 100 - (daysToEnd * 100 / durationAllDays);
        setPercent(complatePercent)
    }, []);

    return (
        <>
            {done
                ? <DonePage />
                : <>
                    <VideoWrapper video={Video} />
                    <div style={{ textAlign: 'center' }}>
                        <h2>23 458</h2>
                        <span>Already registered</span>
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
                                <span>days</span>
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
                                <span>hours</span>
                            </div>
                        </div>
                    </div>
                    <div className="befree-container">
                        <CastingInfo />
                        <CastingForm setDone={setDone} />
                    </div>
                </>}
        </>
    )
}

export default CastingPage;
