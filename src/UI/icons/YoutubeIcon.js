import React from 'react'

const YoutubeIcon = ({ href }) => {
    return (
        <a href={href} rel="noopener" target="_blank">
            <svg width="31" height="22" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="26" rx="7" fill="#384786" />
                <path d="M24.8825 11.9233L17.1123 8.1569C16.6656 7.94034 16.1375 7.94842 15.6995 8.17829C15.2614 8.4084 15 8.81489 15 9.26608V16.7342C15 17.1832 15.2597 17.589 15.695 17.8193C15.9223 17.9396 16.1742 18 16.4267 18C16.658 18 16.8899 17.9494 17.1032 17.8476L24.8737 14.1461C25.3349 13.9263 25.6228 13.5015 25.625 13.0372C25.6269 12.5729 25.3424 12.1462 24.8825 11.9233ZM19.1809 11.2407L17.0611 10.2131L22.8684 13.0282L19.1809 11.2407Z" fill="white" />
            </svg>
        </a>
    )
}

export default YoutubeIcon
