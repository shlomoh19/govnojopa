import React from 'react'
import Skeleton from 'react-loading-skeleton'
import './befree-skeleton.scss'

const BefreeFormSkeleton = () => {
    return (
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
    )
}

export default BefreeFormSkeleton
