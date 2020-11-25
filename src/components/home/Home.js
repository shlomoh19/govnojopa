import React from 'react'
import Team from "./team/Team";
import './Home.scss'
import { useTranslation } from "react-i18next";
import VideoHLS from './video/VideoHLS';
import HomeSkeleton from './Home-skeleton';

const Home = () => {
    const { t } = useTranslation()
    return (
        <div className="home_page">
            <div className="home__title">
                <h1>WE ARE <span>L.</span></h1>
                <div>
                    {t('team.title.text')}
                </div>
            </div>
            <VideoHLS title="team" />
            <div className="home__title"> {t('team.subtitle.text')} </div>
            <Team />
        </div>
    )
}

export default Home
