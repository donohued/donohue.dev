import React, { useState } from 'react'
import '98.css'
import DesktopIcon from './components/DesktopIcon'
import Taskbar from './components/Taskbar'
import AboutMeWindow from './windows/AboutMeWindow'
import { useWindowContext } from './WindowContext'
import HaroldWindow from './windows/HaroldWindow'
import SchoolProjectsWindow from './windows/SchoolProjectsWindow'
import SoftwareMongersWindow from './windows/SoftwareMongersWindow'

export default function Desktop() {
    
    const winContext = useWindowContext();
    if(!winContext) 
        return null
    const { windowList, openWindow } = winContext;

    return (
        <div className='home-screen' id='home-screen' style={{overflow: "hidden"}}>
            <div className='h1' id='desktop-icon-grid'>

            <DesktopIcon title="Recycle Bin" icon="./v2/images/recycle_bin_full-0.png" iconAlt="icon" windowElement={<AboutMeWindow title="About Me" />}/>
            <DesktopIcon title="School Projects" icon="./v2/images/directory_closed-3.png" iconAlt="icon" windowElement={<SchoolProjectsWindow title='School Projects' />} />
            <DesktopIcon title="Harold.exe" icon="./v2/images/executable-0.png" iconAlt="icon" windowElement={<HaroldWindow title="Harold.exe" />}/>
            <DesktopIcon title="Software Mongers" icon="./v2/images/directory_closed-3.png" iconAlt="icon" windowElement={<SoftwareMongersWindow title='SoftwareMongers' />} />
            </div>

            {
                windowList.map((window: JSX.Element, index: number) => {
                    return <React.Fragment key={index}>{window}</React.Fragment>;
                })
            }


            <Taskbar />
        </div>
    )
}
