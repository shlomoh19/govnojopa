import React from 'react'
import Team from "./team/Team";
import './Home.scss'
import { useTranslation } from "react-i18next";
import SimpleVideo from './video/Simple-video';
import TeamImage from '../../files/TeamPicture.jpg'

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
            <SimpleVideo
                title="team"
                videoURL="http://lbefree.com/storage/casting/team-video.mp4" picture
                image={TeamImage}
            />
            <div className="home__title"> {t('team.subtitle.text')} </div>
            <Team />
        </div>
    )
}

export default Home
