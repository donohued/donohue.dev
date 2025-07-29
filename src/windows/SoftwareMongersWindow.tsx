import React from 'react'
import GeneralWindow from '../components/GeneralWindow'
import FileExplorerContainer from '../components/FileExplorerContainer'
import DesktopIcon from '../components/DesktopIcon'
import AboutMeWindow from './AboutMeWindow'

export default function SoftwareMongersWindow(props:{ title: string}) {
  return (
    <GeneralWindow windowTitle='SoftwareMongers' windowElement={<SoftwareMongersWindow title="SoftwareMongers"/>}>
        <FileExplorerContainer>
          <DesktopIcon title="About Software Mongers" icon="./v2/images/directory_closed-3.png" iconAlt="icon" windowElement={<AboutMeWindow title='huh'/>} />
          <DesktopIcon title="Products" icon="./v2/images/directory_closed-3.png" iconAlt="icon" />
          <DesktopIcon title="Collaboration" icon="./v2/images/directory_closed-3.png" iconAlt="icon" />
          <DesktopIcon title="Softwaremongers.com" icon="./v2/images/directory_closed-3.png" iconAlt="icon" />
        </FileExplorerContainer>
    </GeneralWindow>
  )
}
