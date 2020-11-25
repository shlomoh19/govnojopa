import React from 'react'
import Skeleton from 'react-loading-skeleton';
import './Home.scss'

const HomeSkeleton = () => {
    return (
        <div className="home_page">
            <div className="home__title">
                <h1><Skeleton width={'30%'} /></h1>
                <div>
                    <Skeleton width={'50%'} />
                </div>
            </div>
            <Skeleton height={300} />
            <div className="home__title"> <Skeleton width={'70%'} /> </div>
            <div className="main__team">
                {/*FOUNDER*/}
                <div className="team__founder">
                    <div className="team__photo" style={{ borderColor: 'white' }} >
                        <Skeleton circle={true} width={150} height={150} />
                    </div>
                    <div className="team__desc">
                        <span className="team__item-position"> <Skeleton width={150} /> </span>
                        <span className="team__item-name"><Skeleton width={150} /></span>
                        <div className="team__item-contacts">
                            <Skeleton width={30} /><Skeleton width={30} />
                        </div>
                    </div>
                </div>

                {/*TEAM*/}
                <div className="team__items">

                    {new Array(9).fill().map((el, idx) => {
                        return (
                            <div key={idx} className="team__item">
                                <Skeleton circle={true} width={150} height={150} />
                                <div className="team__desc">
                                    <Skeleton count={2} width={'10%'} />
                                </div>
                            </div>
                        )
                    })}


                </div>

            </div>
        </div>
    )
}

export default HomeSkeleton
