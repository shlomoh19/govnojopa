import React, { lazy, useEffect, Suspense } from 'react'
import { useTranslation } from "react-i18next";
import { smoothJumpUp } from '../../utils/scroll-utils';
import VideoJs from './video/VideoJs';
import TeamVideo from '../../files/TeamVideo.mp4'

import './Home.scss'
import VideoHLS from './video/VideoHLS';


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
                videoURL={TeamVideo}
                // videoURL={'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8'}
                title=""
                // videoURL='https://lbefree.com/storage/casting/team-video.mp4'
                image={TeamImage}
            />

            {/*<VideoHLS*/}
            {/*    videoURL={'https://lbefree.com/storage/video/master-playlist.m3u8'}*/}
            {/*    // videoURL={TeamVideo}*/}
            {/*    image={TeamImage}*/}
            {/*/>*/}
            

            <div className="home__title"> {t('team.subtitle.text')} </div>
            <Suspense fallback={<div>Loading...</div>}>
                <TeamWrapperLazy />
            </Suspense>
        </div>
    )
}

export default Home
