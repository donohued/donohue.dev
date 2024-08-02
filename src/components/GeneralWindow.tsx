import React, { ReactNode, useState } from "react";
import Draggable from "react-draggable";
import { useWindowContext } from "../WindowContext";

interface GeneralWindowProps {
    windowTitle: string;
    children: ReactNode;
    windowElement: JSX.Element;
}

const maximizedStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: 9999,
    color: "black",
    transform: "translate(0px, 0px)",
}
const regularStyle: React.CSSProperties = {
    maxWidth: "600px",
    position: "absolute",
    left: "0px",
    zIndex: 9999,
    color: "black",
}
{
    //TODO: Add minimize, maximize functionality
}
function GeneralWindow(props: GeneralWindowProps) {

    const [isMaximized, setIsMaximized] = useState(false);
    function toggleMaximized() { 
        //implement later bc it feels a bit strange rn
        //setIsMaximized(!isMaximized); 
    }

    const winContext = useWindowContext();
    if (!winContext)
        return null
    const { windowList, openWindow, closeWindow } = winContext;

    return (
        <Draggable handle=".title-bar" defaultPosition={{ x: 80, y: 80 }}>
            <div className="window" style={isMaximized ? maximizedStyle : regularStyle}>
                <div className="title-bar">
                    <div className="title-bar-text">{props.windowTitle}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize" onClick={toggleMaximized}></button>
                        <button aria-label="Close" onClick={() => closeWindow(props.windowElement)}></button>
                    </div>
                </div>

                <div className="window-body">{props.children}</div>

            </div>
        </Draggable>

    );
}

export default GeneralWindow;
