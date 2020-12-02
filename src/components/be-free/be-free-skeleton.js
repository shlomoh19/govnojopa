import React from 'react'
import Skeleton from 'react-loading-skeleton';
import BefreeFormSkeleton from './Be-free-form-skeleton';
import './befree-skeleton.scss'


const BefreeSkeleton = () => {
    return (
        <div className="befree">
            <Skeleton height={300} />
            <header className="skeleton_header">
                <Skeleton height={50} />
            </header>
            <Skeleton className="skeleton-title" height={30} />
            <BefreeFormSkeleton />
            <Skeleton height={70} style={{marginTop: '50px'}} />
            <Skeleton height={70} />
        </div>
    )
}

export default BefreeSkeleton
