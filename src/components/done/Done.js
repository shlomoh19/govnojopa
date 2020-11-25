import React from 'react'
import './Done.scss'

const DonePage = () => {
  return (
    <div className="done">
      <div className="done_title">SUCCESS</div>

      <svg max-width="198" width="13%" height="198" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M124.246 3.27318C105.313 -1.72007 85.3248 -0.9869 66.8085 5.37997C48.2923 11.7468 32.0798 23.4614 20.2213 39.0424C8.36279 54.6234 1.39089 73.3709 0.187233 92.9142C-1.01643 112.458 3.60221 131.919 13.4591 148.837C23.316 165.756 37.9684 179.371 55.5634 187.962C73.1585 196.553 92.9059 199.734 112.309 197.101C131.711 194.469 149.898 186.143 164.568 173.174C179.238 160.206 189.734 143.179 194.727 124.246L99 99L124.246 3.27318Z" fill="#384786" />
        <circle cx="98.5298" cy="99.4644" r="94.8169" fill="white" />
        <circle cx="98.5298" cy="99.4644" r="94.3169" stroke="#384786" stroke-opacity="0.58" />
        <path d="M94.6281 137.684C92.3684 137.684 90.3596 136.68 89.1043 135.174L51.1912 93.9967C48.4293 90.9839 48.6806 86.2132 51.6934 83.4513C54.7062 80.6894 59.4769 80.9407 62.2388 83.9535L94.879 119.356L185.268 29.2181C188.281 26.2053 193.051 26.2053 195.813 29.2181C198.575 32.2308 198.826 37.0016 195.813 39.7635L99.9011 135.425C98.6453 136.931 96.6369 137.684 94.6281 137.684Z" fill="#6A8C8E" />
      </svg>


      <div className="done_text">CHECK YOUR EMAIL</div>
    </div>
  )
}

export default DonePage
