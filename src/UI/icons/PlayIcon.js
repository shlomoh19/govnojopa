import React from 'react'

const PlayIcon = ({ className, clickHandler }) => {
    return (
        <svg className={className} onClick={clickHandler} width="104" height="115" viewBox="0 0 104 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <path d="M19 17.8965C19 14.8243 22.3196 12.899 24.9862 14.4244L83.1417 47.6926C85.7794 49.2015 85.8376 52.9845 83.2476 54.5739L25.0921 90.2615C22.4269 91.897 19 89.9793 19 86.8523V17.8965Z" fill="#384786" />
            </g>
            <defs>
                <filter id="filter0_d" x="0.615259" y="0.408482" width="102.925" height="113.737" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4.9026" />
                    <feGaussianBlur stdDeviation="9.19237" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default PlayIcon
