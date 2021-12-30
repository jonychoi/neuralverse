import React from 'react';

export const ImageIcon = ({width = 270, height = 270, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10H220C242.091 10 260 27.9086 260 50V220C260 242.091 242.091 260 220 260H50C27.9086 260 10 242.091 10 220V50C10 27.9086 27.9086 10 50 10Z" stroke={stroke} stroke-width="20"/>
        <circle cx="202.5" cy="65.5" r="19.5" stroke={stroke} stroke-width="10"/>
        <path d="M13 250L74.3886 130.371C81.5891 116.339 101.44 115.774 109.428 129.373L144.685 189.398C148.08 195.178 156.089 196.046 160.644 191.129L176.245 174.287C185.635 164.15 202.231 166.362 208.638 178.605L246 250" stroke={stroke} stroke-width="20"/>
    </svg>
);

export const VideoIcon = ({width = 270, height = 270, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10H220C242.091 10 260 27.9086 260 50V220C260 242.091 242.091 260 220 260H50C27.9086 260 10 242.091 10 220V50C10 27.9086 27.9086 10 50 10Z" stroke={stroke} stroke-width="20"/>
        <path d="M192 135L106.5 184.363L106.5 85.6366L192 135Z" stroke={stroke} stroke-width="20"/>
    </svg>
);

export const DocumentIcon = ({width = 270, height = 270, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10H220C242.091 10 260 27.9086 260 50V220C260 242.091 242.091 260 220 260H50C27.9086 260 10 242.091 10 220V50C10 27.9086 27.9086 10 50 10Z" stroke={stroke} stroke-width="20"/>
        <line x1="43" y1="67" x2="170" y2="67" stroke={stroke} stroke-width="20"/>
        <line x1="93" y1="113" x2="220" y2="113" stroke={stroke} stroke-width="20"/>
        <line x1="47" y1="160" x2="174" y2="160" stroke={stroke} stroke-width="20"/>
        <line x1="93" y1="204" x2="220" y2="204" stroke={stroke} stroke-width="20"/>
    </svg>
);
  
export const EventIcon = ({width = 270, height = 270, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10H220C242.091 10 260 27.9086 260 50V220C260 242.091 242.091 260 220 260H50C27.9086 260 10 242.091 10 220V50C10 27.9086 27.9086 10 50 10Z" stroke={stroke} stroke-width="20"/>
        <path d="M21 18L33.494 37.1768C37.5934 43.4689 46.9067 43.1659 50.5884 36.6206L55.9813 27.0333C59.868 20.1235 69.8658 20.2682 73.551 27.2876L77.8153 35.41C81.4229 42.2818 91.143 42.6032 95.1968 35.9848L101.794 25.2142C105.737 18.7762 115.119 18.8624 118.943 25.3718L125.378 36.3241C129.243 42.9034 138.757 42.9034 142.622 36.3241L148.689 25.9967C152.597 19.3455 162.245 19.4362 166.027 26.1596L171.186 35.3308C175.03 42.1646 184.885 42.1175 188.664 35.2473L193.137 27.1148C196.957 20.169 206.954 20.2172 210.707 27.1996L216.203 37.4241C219.632 43.8039 228.495 44.5354 232.924 38.8042L249 18" stroke={stroke} stroke-width="10"/>
    </svg>
);