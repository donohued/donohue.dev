import React from 'react';
import { useWindowContext } from '../WindowContext';

interface DesktopIconProps {
    title: string;
    icon: string;
    iconAlt: string;
    windowElement?: JSX.Element;
}

let clickCounter = {
    key: '',
    count: 0,
};
let clickTimer = 0;

// Double click handler, open window if double clicked
function handleClick(openWindow: (window: JSX.Element) => void, window?: JSX.Element){
    if (clickCounter.count === 0) {
        clickCounter.count++;
        clickTimer = setTimeout(() => {
            clickCounter.count = 0;
        }, 250);
    } else {
        clearTimeout(clickTimer);
        clickCounter.count = 0;
        if(window){
            openWindow(window);
            console.log('Double click!');
        }else
            console.log('Double click!', "No window to specified...");
    }
}

function DesktopIcon(props: DesktopIconProps) {

    const winContext = useWindowContext();
    if(!winContext) 
        return null
    const { windowList, openWindow } = winContext;

    return (
        <div className="icon" onClick={() => handleClick(openWindow, props.windowElement)}>
            <img src={props.icon} alt={props.iconAlt} />
            <br />
            <p>{props.title}</p>
        </div>
    );
}

export default DesktopIcon;
