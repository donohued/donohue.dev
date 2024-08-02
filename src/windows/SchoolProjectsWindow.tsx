import React from 'react'
import GeneralWindow from '../components/GeneralWindow'
import FileExplorerContainer from '../components/FileExplorerContainer'
import DesktopIcon from '../components/DesktopIcon'
import AboutMeWindow from './AboutMeWindow'

export default function SchoolProjectsWindow(props:{ title: string}) {
  return (
    <GeneralWindow windowTitle='School Projects' windowElement={<SchoolProjectsWindow title="School Projects"/>}>
        <FileExplorerContainer>
          <DesktopIcon title="QueueUp" icon="./v2/images/directory_closed-3.png" iconAlt="icon" windowElement={<AboutMeWindow title='lol'/>} />
          <DesktopIcon title="Assisted Draft Client" icon="./v2/images/directory_closed-3.png" iconAlt="icon" />
          <DesktopIcon title="War Card Game" icon="./v2/images/directory_closed-3.png" iconAlt="icon" />
          <DesktopIcon title="TCP Air Traffic Control" icon="./v2/images/directory_closed-3.png" iconAlt="icon" />
        </FileExplorerContainer>
    </GeneralWindow>
  )
}
