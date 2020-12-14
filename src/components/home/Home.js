import React, { useEffect } from 'react'
import Team from "./team/Team";
import './Home.scss'
import { useTranslation } from "react-i18next";
import TeamImage from '../../files/TeamPicture.jpg';
import { smoothJumpUp } from '../../utils/scroll-utils';
import VideoJs from './video/VideoJs';

const Home = () => {
    const { t } = useTranslation()

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
            <Team />
        </div>
    )
}

export default Home
