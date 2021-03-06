import React, { useEffect, useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Follow from './components/follow/Follow'
import Casting from './components/casting/Casting'
import Donate from "./components/donate/Donate";
import JoinTheTeam from './components/join/JoinTheTeam'
import DonePage from '../done/Done';
import { useTranslation } from "react-i18next";
import { smoothJumpUp } from '../../utils/scroll-utils'
import VideoJs from '../home/video/VideoJs';

import './Be-free.scss'

function BeFree({ done, setDone }) {
  const [borderActiveMarginLeft, setBorderActiveMarginLeft] = useState(0)

  const CastingPoster = 'https://lbefree.com/storage/casting/castingImage.jpg'

  useEffect(() => {
    smoothJumpUp()
  }, [])

  const { t } = useTranslation()

  const styles = {
    left: `${borderActiveMarginLeft}%`
  }

  const setBorderFollow = () => setBorderActiveMarginLeft(0)
  const setBorderCasting = () => setBorderActiveMarginLeft(25)
  const setBorderDonate = () => setBorderActiveMarginLeft(50)
  const setBorderJoin = () => setBorderActiveMarginLeft(75)

  const renderFollowPage = () => <Follow setDone={setDone} />
  const renderCastingPage = () => <Casting setDone={setDone} />
  const renderDonatePage = () => <Donate setDone={setDone} />
  const renderJoinTheTeam = () => <JoinTheTeam setDone={setDone} />

  return (
    <div className="befree">
      <VideoJs
        title="casting"
        videoURL="https://lbefree.com/storage/casting/casting.mp4"
        image={CastingPoster}
      />
      <header className="befree__header" style={{ marginTop: '50px' }}>
        <NavLink
          onClick={setBorderFollow} className="befree__header-item" to="/befree/follow">
          {t('follow')}
        </NavLink>
        <NavLink
          onClick={setBorderCasting} className="befree__header-item" to="/befree/casting">
          {t('casting')}
        </NavLink>
        <NavLink
          onClick={setBorderDonate} className="befree__header-item" to="/befree/donate">
          {t('donate')}
        </NavLink>
        <NavLink
          onClick={setBorderJoin} className="befree__header-item" to="/befree/join">
          {t('joinTheTeam')}
        </NavLink>
        <span style={styles} className="befree__border" />
      </header>
      {
        done
          ? <DonePage />
          : <>
            <Route path="/befree/follow" render={renderFollowPage} />
            <Route path="/befree/casting" render={renderCastingPage} />
            <Route path="/befree/donate" render={renderDonatePage} />
            <Route path="/befree/join" render={renderJoinTheTeam} />
          </>
      }
    </div>
  )
}

export default BeFree
