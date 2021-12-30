import React from 'react';

export const RightIcon = ({width = 209, height = 385, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 209 385" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 14.5L185.429 185.429C189.334 189.334 189.334 195.666 185.429 199.571L14.5 370.5" stroke={stroke} stroke-width="50"/>
    </svg>
)

export const BenchmarkIcon = ({width = 503, height = 428, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 503 428" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="13" y1="4.37114e-07" x2="13" y2="408" stroke={stroke} stroke-width="20"/>
        <line x1="503" y1="418" x2="3" y2="418" stroke={stroke} stroke-width="20"/>
        <path d="M13.5 323L67.0617 368.42C71.7526 372.398 78.8886 371.239 82.0789 365.98L142.827 265.851C145.875 260.827 152.576 259.501 157.307 262.985L204.313 297.603C209.001 301.055 215.634 299.789 218.721 294.854L281.598 194.333C285.231 188.526 293.494 188.007 297.824 193.314L330.855 233.793C335.275 239.21 343.748 238.534 347.254 232.486L465.5 28.5" stroke={stroke} stroke-width="40"/>
    </svg>
)

export const CloseIcon = ({width = 539, height = 539, bg, stroke}) => (
    <svg width={width} height={height} viewBox="0 0 539 539" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="269.5" cy="269.5" r="269.5" fill={bg}/>
        <path d="M132.5 150L393 410.5" stroke={stroke} stroke-width="40"/>
        <path d="M393 150L132.5 410.5" stroke={stroke} stroke-width="40"/>
    </svg>
)

export const SearchIcon = ({width = 490, height = 506, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 490 506" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="188" cy="188" r="173" stroke={stroke} stroke-width="40"/>
        <path d="M303.5 320L475 491.5" stroke={stroke} stroke-width="40"/>
    </svg>
)