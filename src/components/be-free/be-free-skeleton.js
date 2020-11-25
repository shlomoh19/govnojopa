import React from 'react'
import Skeleton from 'react-loading-skeleton';
import './befree-skeleton.scss'


const BefreeSkeleton = () => {
    return (
        <div className="befree">
            <Skeleton height={300} />
            <header className="skeleton_header">
                <Skeleton height={50} />
            </header>
            <Skeleton className="skeleton-title" height={30} />
            <div className="casting_form-wrapper">
                <div className="befree-col casting__c-1">
                    <Skeleton height={70} width={300} />
                    <Skeleton height={70} width={300} />
                    <Skeleton height={70} width={300} />
                    <Skeleton height={70} width={300} />
                </div>
                <div className="befree-col casting__c-2">
                    <Skeleton height={70} width={300} />
                    <Skeleton height={215} width={300} />
                </div>
            </div>
            <Skeleton height={70} style={{marginTop: '50px'}} />
            <Skeleton height={70} />
        </div>
    )
}

export default BefreeSkeleton
