import React from 'react'
import Skeleton from 'react-loading-skeleton';
import BefreeFormSkeleton from '../be-free/Be-free-form-skeleton';

const CastingSkeleton = () => {

    const AlreadyRegisteredTitle = {
        margin: '0 auto',
        width: '33%'
    }

    const CircleWrapper = {
        margin: '0 auto',
        width: '300px',
        display: 'flex',
        justifyContent: 'space-between'
    }

    const PageTitleTitle = {
        margin: '0 auto',
        width: '60%',
        marginTop: '50px'
    }

    return (
        <div style={{ marginTop: '50px' }}>
            <Skeleton height={300} />
            <div style={AlreadyRegisteredTitle}>
                <Skeleton height={70} />
            </div>
            <div style={CircleWrapper}>
                <Skeleton circle width={100} height={100} />
                <Skeleton circle width={100} height={100} />
            </div>
            <div style={PageTitleTitle}>
                <Skeleton height={30} />
            </div>
            <Skeleton height={100} style={{marginTop: '50px'}} />
            <div style={PageTitleTitle}>
                <Skeleton height={30} />
            </div>
            <Skeleton height={300} style={{marginTop: '50px', marginBottom: '30px'}} />
            <BefreeFormSkeleton />
        </div>
    )
}

export default CastingSkeleton
