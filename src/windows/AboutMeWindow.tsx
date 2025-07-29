import React from 'react'
import GeneralWindow from '../components/GeneralWindow'
import AboutMe from '../components/windowcontent/AboutMe'

export default function AboutMeWindow(props:{ title: string}) {
  return (
    <GeneralWindow windowTitle='About Me' windowElement={<AboutMeWindow title="About Me"/>}>
        <AboutMe />
    </GeneralWindow>
  )
}
