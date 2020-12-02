import React, { useState } from 'react'
import Founder from '../../../files/team/Lilit_founder.mp4'
import FounderImg from '../../../files/team/images/Lilit_founder.jpg'
import People from './People'
import InstagramIcon from '../../../UI/icons/InstagramIcon'
import './Team.scss'
import YoutubeIcon from '../../../UI/icons/YoutubeIcon'
import FacebookIcon from '../../../UI/icons/FacebookIcon'

export default function () {
    const [openTeam, setOpen] = useState(false)
    const openTeamHandler = () => setOpen(!openTeam)

    const playHandler = event => event.target.play()
    const pauseHandler = event => event.target.pause()

    return (
        <div className="main__team">
            {/*FOUNDER*/}
            <div className="team__founder">
                <div className="team__photo" >
                    <video
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
                <i style={openTeam ? { transform: 'rotate(180deg)' } : null} className="fas fa-angle-down" />
            </div>

            {/*TEAM*/}
            <div className={openTeam ? "team__items team-open" : "team__items"}>
                {
                    People.map(person => {
                        const { id, position, FIO, photo, video } = person
                        return (
                            <div key={id} className="team__item">
                                {
                                    video
                                        ? <video
                                            className="team__photo"
                                            poster={photo}
                                            onMouseOver={playHandler}
                                            onMouseOut={pauseHandler}
                                            src={video}
                                        >
                                        </video>
                                        : <img className="team__photo" src={photo} alt="sorry bro :'(" />
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
