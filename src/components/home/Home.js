import React from 'react'
import VideoWrapper from "./video/Video";
import Team from "./team/Team";
import './Home.scss'
import videoTeam from '../../video/team.mp4'
import titleImg from '../../video/image.jpg'
import {useTranslation} from "react-i18next";

const Home = () => {
    const {t} = useTranslation()
    return (
        <div className="home_page">
            <div className="home__title">
                <h1>WE ARE <span>L.</span></h1>
                <div>
                    {t('team.title.text')}
                </div>
            </div>
            <VideoWrapper video={videoTeam} title={titleImg} />
            <div className="home__title"> {t('team.subtitle.text')} </div>
            <Team/>
        </div>
    )
}

export default Home
