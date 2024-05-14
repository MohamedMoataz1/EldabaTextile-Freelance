import React from 'react';
import marker from '../assets/images/marker-pin.png'
const Marker = ({
    ke,
    className,
    lat,
    lng,
    markerId,
    onClick,
    draggable,
    // eslint-disable-next-line no-unused-vars
    onDrag,
    // eslint-disable-next-line no-unused-vars
    onDragEnd,
    // eslint-disable-next-line no-unused-vars
    onDragStart,
    ...props
}) => {
    console.log(onDrag)
    return(
        lat && lng ? 
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
                className={className}
                src={marker}
                onClick={(e) => (onClick ? onClick(e, { markerId, lat, lng }) : null)}
                style={{ fontSize: 40 }}
                alt={markerId}
                width={55}
                height={55}
                onDrag={onDrag}
                {...props}
            />
         : null
    )
    
}

export default Marker;