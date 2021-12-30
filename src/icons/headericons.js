import React from 'react';

export const CubeIcon = ({width = 89, height = 88, stroke="#9C15B0"}) => (
    <svg width={width} height={height} viewBox="0 0 89 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.1109 0.50001C43.8561 0.201823 44.6874 0.201816 45.4327 0.50001L86.0581 16.7551C87.2449 17.2298 88.0224 18.379 88.0224 19.6568C88.0224 19.7682 88.0168 19.8786 88.0049 19.9877C88.0062 20.0272 88.0074 20.0668 88.0074 20.1067V68.2204C88.0074 69.4929 87.2356 70.6386 86.0562 71.1167L45.4751 87.5692C45.0669 87.7342 44.6442 87.8073 44.2302 87.798C43.8297 87.7992 43.4272 87.7236 43.0452 87.5692L2.46418 71.1167C1.28487 70.6386 0.513245 69.4929 0.513245 68.2204V20.1067C0.513245 20.009 0.517745 19.9123 0.526495 19.8169C0.523807 19.7638 0.522432 19.7104 0.522432 19.6568C0.522307 18.379 1.30012 17.2298 2.48649 16.7551L43.1109 0.50001ZM46.5132 82.5L84.0132 67.7764V21.2764L46.5132 36.2764V82.5ZM4.51324 20.1067V68.2204L42.0132 82.5V36.2764L4.51324 20.1067ZM44.2717 3.5L7.5 18L44.2717 32.5358L82.5 18L44.2717 3.5Z" fill="#AB17A3"/>
    </svg>
);


export const ModelIcon = ({width = 92, height = 126, stroke1="#ED2166", stroke2 = "#25A2F9"}) => (
    <svg width={width} height={height} viewBox="0 0 92 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="14.4061" y1="13.0862" x2="77.4061" y2="41.0862" stroke={stroke1} stroke-width="2"/>
        <line x1="13.6838" y1="62.0513" x2="76.6838" y2="41.0513" stroke={stroke1} stroke-width="2"/>
        <line x1="14.7385" y1="13.3257" x2="77.7385" y2="82.3257" stroke={stroke1} stroke-width="2"/>
        <line x1="13.5939" y1="110.086" x2="76.5939" y2="82.0862" stroke={stroke1} stroke-width="2"/>
        <line x1="14.3026" y1="62.0469" x2="77.3026" y2="82.0469" stroke={stroke1} stroke-width="2"/>
        <line x1="13.2615" y1="110.326" x2="76.2615" y2="41.3257" stroke={stroke1} stroke-width="2"/>
        <circle cx="14.0059" cy="14.0059" r="8.1" transform="rotate(-52.9579 14.0059 14.0059)" fill={stroke2} stroke={stroke2} stroke-width="3.8"/>
        <circle cx="14.0059" cy="111.006" r="8.1" transform="rotate(-52.9579 14.0059 111.006)" fill={stroke2} stroke={stroke2} stroke-width="3.8"/>
        <circle cx="77.006" cy="42.0059" r="8.1" transform="rotate(-52.9579 77.006 42.0059)" fill={stroke2} stroke={stroke2} stroke-width="3.8"/>
        <circle cx="77.006" cy="83.006" r="8.1" transform="rotate(-52.9579 77.006 83.006)" fill={stroke2} stroke={stroke2} stroke-width="3.8"/>
        <circle cx="14.0059" cy="63.0059" r="8.1" transform="rotate(-52.9579 14.0059 63.0059)" fill={stroke2} stroke={stroke2} stroke-width="3.8"/>
    </svg>
);

    
export const TrendIcon = ({width = 104, height = 91, stroke="black"}) => (
    <svg width={width} height={height} viewBox="0 0 104 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="2.5" width="74" height="55.7931" stroke={"#25A2F9"} stroke-width="5"/>
        <rect x="27.5" y="32.5" width="74" height="55.7931" stroke={"#ED2166"} stroke-width="5"/>
    </svg>
);

    
export const NftIcon = ({width = 157, height = 157, stroke="black"}) => (
    <svg width={width} height={height} viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="57.0483" y1="48.5642" x2="109.048" y2="79.5642" stroke="#ED2166" stroke-width="8"/>
        <line x1="54.8094" y1="110.653" x2="109.809" y2="74.6532" stroke="#ED2166" stroke-width="8"/>
        <circle cx="57.0089" cy="49.0089" r="12.5" transform="rotate(-52.9579 57.0089 49.0089)" fill="#25A2F9" stroke="#25A2F9" stroke-width="5"/>
        <circle cx="57.0089" cy="110.009" r="12.5" transform="rotate(-52.9579 57.0089 110.009)" fill="#25A2F9" stroke="#25A2F9" stroke-width="5"/>
        <circle cx="112.009" cy="78.0089" r="12.5" transform="rotate(-52.9579 112.009 78.0089)" fill="#25A2F9" stroke="#25A2F9" stroke-width="5"/>
        <circle cx="78.5" cy="78.5" r="73.5" stroke="#9D15B0" stroke-width="8"/>
    </svg>
);

export const NotiIcon = ({width = 55, height = 56, stroke="black"}) => (
    <svg width={width} height={height} viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M47 20.9636V49C47 51.7614 44.7614 54 42 54H7C4.23858 54 2 51.7614 2 49V13C2 10.2386 4.23858 8 7 8H33.0909" stroke={stroke} stroke-width="3.8"/>
        <circle cx="46" cy="9" r="7.5" stroke={stroke} stroke-width="3.8"/>
    </svg>
)

export const DesignIcon = ({width = 477, height = 241}) => (
    <svg width={width} height={height} viewBox="0 0 477 241" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="297.144" y1="38.4917" x2="223.003" y2="205.308" stroke="#25A2F9" stroke-width="7"/>
        <line x1="167.52" y1="35.9634" x2="223.126" y2="202.78" stroke="#25A2F9" stroke-width="7"/>
        <line x1="296.306" y1="39.6549" x2="113.602" y2="206.471" stroke="#25A2F9" stroke-width="7"/>
        <line x1="40.3" y1="35.6487" x2="114.441" y2="202.465" stroke="#25A2F9" stroke-width="7"/>
        <line x1="167.536" y1="38.1292" x2="114.578" y2="204.945" stroke="#25A2F9" stroke-width="7"/>
        <line x1="39.4616" y1="34.4855" x2="222.165" y2="201.302" stroke="#25A2F9" stroke-width="7"/>
        <line x1="455.019" y1="100.8" x2="358.204" y2="214.857" stroke="#ED2166" stroke-width="7"/>
        <line x1="358.265" y1="96.3451" x2="449.776" y2="210.401" stroke="#ED2166" stroke-width="7"/>
        <circle cx="355.592" cy="98.5924" r="15.0585" transform="rotate(37.0421 355.592 98.5924)" fill="#9C15B0" stroke="#9C15B0" stroke-width="5"/>
        <circle cx="355.592" cy="212.649" r="15.0585" transform="rotate(37.0421 355.592 212.649)" fill="#9C15B0" stroke="#9C15B0" stroke-width="5"/>
        <circle cx="452.408" cy="212.649" r="15.0585" transform="rotate(37.0421 452.408 212.649)" fill="#9C15B0" stroke="#9C15B0" stroke-width="5"/>
        <circle cx="452.408" cy="98.5924" r="15.0585" transform="rotate(37.0421 452.408 98.5924)" fill="#9C15B0" stroke="#9C15B0" stroke-width="5"/>
        <circle cx="293.93" cy="37.086" r="23.9788" transform="rotate(37.0421 293.93 37.086)" fill="#9C15B0" stroke="#9C15B0" stroke-width="5"/>
        <circle cx="37.0859" cy="37.086" r="23.9788" transform="rotate(37.0421 37.0859 37.086)" fill="#9C15B0" stroke="#9C15B0" stroke-width="5"/>
        <circle cx="219.789" cy="203.902" r="23.9788" transform="rotate(37.0421 219.789 203.902)" fill="#9C15B0" stroke="#9C15B0" stroke-width="5"/>
        <circle cx="111.227" cy="203.902" r="23.9788" transform="rotate(37.0421 111.227 203.902)" fill="#9C15B0" stroke="#9C15B0" stroke-width="5"/>
        <circle cx="164.184" cy="37.086" r="23.9788" transform="rotate(37.0421 164.184 37.086)" fill="#9C15B0" stroke="#9C15B0" stroke-width="5"/>
    </svg>
)