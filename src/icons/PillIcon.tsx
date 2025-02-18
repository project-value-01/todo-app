export interface IconPropTypes {
    width: string,
    height: string,
    className: string,
    fillPercentage: number, // Add fillPercentage prop
}

const PillIcon = ({width, height, className, fillPercentage}: IconPropTypes) => {
  return (
    <svg
      width={width} height={height} viewBox="0 0 13.828113 48.004421" version="1.1" id="svg1"
      xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset={`${fillPercentage}%`} style={{stopColor: 'white', stopOpacity: 1}} />
          <stop offset={`${fillPercentage}%`} style={{stopColor: 'black', stopOpacity: 0}} />
        </linearGradient>
      </defs>
      <g
        id="layer1"
        transform="matrix(0.9974594,0,0,1.1303955,-132.36199,-80.797684)">
        <path
          style={{
            stroke: '#ffffff',
            strokeWidth: 1.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
            fill: 'url(#grad1)' // Use the gradient for fill
          }}
          id="rect2"
          width="13.316333"
          height="41.919926"
          x="132.97261"
          y="71.750862"
          ry="0"
          d="m 139.69878,71.750862 h 0.0665 a 6.5236303,6.5236303 45 0 1 6.52363,6.52363 V 107.2719 a 6.3988923,6.3988923 135 0 1 -6.39889,6.39889 h -0.42208 a 6.4953572,6.4953572 45 0 1 -6.49536,-6.49536 V 78.477035 a 6.7261731,6.7261731 135 0 1 6.72617,-6.726173 z" />
      </g>
    </svg>
  )
}

export default PillIcon