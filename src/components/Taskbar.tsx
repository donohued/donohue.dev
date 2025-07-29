import React from 'react'
import TaskbarTab from './TaskbarTab'
import { useWindowContext } from "../WindowContext";

export default function Taskbar() {

    const winContext = useWindowContext();
    if (!winContext)
        return null
    const { windowList, openWindow, closeWindow } = winContext;

    return (
        <div className="h2 window" id="menu-bar">

            <button className='start-button' style={{ height: "26px", margin: "2px", backgroundImage: " url(./v2/images/start-button.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            </button>

            {
                windowList.map((window: JSX.Element, index: number) => {
                    return <TaskbarTab title={window.props.title} />
                })
            }
            

            <div
                className="status-bar"
                style={{ height: "26px", margin: "2px", marginLeft: "auto" }}
            >
                <div
                    className="status-bar-field"
                    style={{ textAlign: "center", color: "#222", display: "flex" }}
                >
                    <img
                        src="./v2/images/loudspeaker_rays_green-1.png"
                        alt="wifi icon"
                        style={{ height: "16px", marginRight: "4px", marginTop: "4px" }}
                    />
                    <div style={{ lineHeight: "25px" }}>2:45 AM</div>
                </div>
            </div>
        </div>
    )
}
