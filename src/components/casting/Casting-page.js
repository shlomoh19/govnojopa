import React, { useEffect, useState } from 'react'
import moment from "moment";
import CastingInfo from "../../UI/components/more-info-casting/more-info.casting";
import CastingForm from "../../UI/components/casting-form/casting-form";
import DonePage from '../done/Done';
import { useTranslation } from 'react-i18next';
import { useHttp } from '../../hooks/hook.http';
import { smoothJumpUp } from '../../utils/scroll-utils';
import VideoCasting from '../../files/casting.mp4'

import VideoJs from '../home/video/VideoJs';
import CircularProgressbar from '../../UI/components/circular-rogressbar/circular-progressbar';
import './Casting-page.scss'

const CastingPage = ({ done, setDone }) => {
    const [daysToEnd, setDaysToEnd] = useState(0)
    const [hoursToEnd, setHoursToEnd] = useState(0)

    const [alreadyRegistered, setAlreadyRegistered] = useState(0)

    const { t } = useTranslation()
    const { request } = useHttp()
    const CastingPoster = 'https://lbefree.com/storage/casting/castingImage.jpg';

    useEffect(() => {
        smoothJumpUp()
        const now = moment(new Date());
        const end = moment("2021-04-20");
        const durationDaysToEnd = moment.duration(end.diff(now));
        const daysToEnd = durationDaysToEnd.asDays();
        const hoursToEnd = durationDaysToEnd.asHours();
        setDaysToEnd(Math.round(daysToEnd));
        setHoursToEnd(Math.round(hoursToEnd) % 24);

        request('https://lbefree.com/api/casting/counts/all').then(res => setAlreadyRegistered(res))
    }, []);


    return (
        <div style={{ marginTop: '50px' }}>
            {done
                ? <DonePage />
                : <>
                    <VideoJs
                        title="casting-page"
                        videoURL={VideoCasting}
                        // videoURL="https://lbefree.com/storage/casting/casting.mp4"
                        image={CastingPoster}
                    />
                    <div style={{ textAlign: 'center' }}>
                        <p className="registered_count"> {alreadyRegistered} </p>
                        <span className="registered_title"> {t('casting.already.registred')} </span>
                        <CircularProgressbar days={daysToEnd} hours={hoursToEnd} />
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
