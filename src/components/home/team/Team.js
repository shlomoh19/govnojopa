import React, { useState } from 'react'
import People from './People'
import InstagramIcon from '../../../UI/icons/InstagramIcon'
import YoutubeIcon from '../../../UI/icons/YoutubeIcon'
import FacebookIcon from '../../../UI/icons/FacebookIcon'

import './Team.scss'
import ArrowDownIcon from '../../../UI/icons/ArrowDownIcon'


export default function () {
    const [openTeam, setOpen] = useState(false)
    const openTeamHandler = () => setOpen(!openTeam)

    const playHandler = event => event.target.play()
    const pauseHandler = event => {
        event.target.currentTime = 0
        event.target.pause()
    } 
    

    const Founder = 'https://lbefree.com/storage/casting/team/Lilit_founder.mp4'
    const FounderImg = 'https://lbefree.com/storage/casting/team/images/Lilit_founder.jpg'

    return (
        <div className="main__team">
            {/*FOUNDER*/}
            <div className="team__founder">
                <div className="team__photo" >
                    <video
                        loop
                        className="video-team"
                        poster={FounderImg}
                        onMouseOver={playHandler}
                        onMouseOut={pauseHandler}
                        src={Founder}
                    >
                    </video>
                </div>
                <div className="team__desc">
                    <span className="team__item-position">FOUNDER</span>
                    <span className="team__item-name">Lilit Unanyan</span>
                    <div className="team__item-contacts">
                        <InstagramIcon href="https://www.instagram.com/casadelili/" />
                        <YoutubeIcon href="https://www.youtube.com/channel/UCAZFH1xkBWGn5EbbGuqYcGA" />
                        <FacebookIcon href="https://www.facebook.com/casadelilit" />
                    </div>
                </div>
            </div>

            {/*MOBILE MENU BUTTON*/}
            <div onClick={openTeamHandler} className="team__button-mobile">
                <span>{openTeam ? 'Close the Team' : 'Our Team'}</span>
                <ArrowDownIcon style={openTeam ? { transform: 'rotate(180deg)' } : null}/>
            </div>

            {/*TEAM*/}
            <div className={openTeam ? "team__items team-open" : "team__items"}>
                {
                    People.map(person => {
                        const { id, position, FIO, photo, video, webp } = person
                        return (
                            <div key={id} className="team__item">
                                {
                                    video
                                        ? <video
                                            
                                            loop
                                            className="team__photo"
                                            poster={photo}
                                            onMouseOver={playHandler}
                                            onMouseOut={pauseHandler}
                                            src={video}
                                        >
                                        </video>
                                        :<picture>
                                            <source srcset={webp} type="image/webp"/>
                                            <img className="team__photo" src={photo} alt="sorry bro :'(" />
                                        </picture>
                                }
                                <div className="team__desc">
                                    <span className="team__item-position">{position}</span>
                                    <span className="team__item-name">{FIO}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
