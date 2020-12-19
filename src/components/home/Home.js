import React, { lazy, useEffect, Suspense } from 'react'
import { useTranslation } from "react-i18next";
import { smoothJumpUp } from '../../utils/scroll-utils';
import VideoJs from './video/VideoJs';

import './Home.scss'

const TeamWrapperLazy = lazy(() => import('./team/Team'))

const Home = () => {
    const { t } = useTranslation()

    const TeamImage = 'https://lbefree.com/storage/casting/TeamPicture.jpg';

    useEffect(() => {
        smoothJumpUp()
    }, [])

    return (
        <div className="home_page">
            <div className="home__title">
                <h1>WE ARE <span>L.</span></h1>
                <div>
                    {t('team.title.text')}
                </div>
            </div>
            <VideoJs
                title="team"
                videoURL="http://lbefree.com/storage/casting/team-video.mp4"
                image={TeamImage}
            />

            <div className="home__title"> {t('team.subtitle.text')} </div>
            <Suspense fallback={<div>Loading...</div>}>
                <TeamWrapperLazy/>
            </Suspense>
        </div>
    )
}

export default Home
