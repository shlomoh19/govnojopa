import React from 'react'
import { useTranslation } from 'react-i18next';
import './circular-progressbar.scss'

const CircularProgressbar = ({ days, hours }) => {
    const { t } = useTranslation()
    return (
        <div className="circular_flex">
            <div className="circular_item">
                <span className="circular_circle">
                    {days}
                </span>
                <span>{t('days')}</span>
            </div>
            <div className="circular_item">
                <span className="circular_circle">
                    {hours}
                </span>
                <span>{t('hours')}</span>
            </div>
        </div>
    );
};

export default CircularProgressbar