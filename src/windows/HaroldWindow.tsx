import React from 'react'
import GeneralWindow from '../components/GeneralWindow'
import Harold from '../components/windowcontent/Harold'

export default function HaroldWindow(props:{ title: string}) {
  return (
    <GeneralWindow windowTitle='About Me' windowElement={<HaroldWindow title="About Me"/>}>
        <Harold />
    </GeneralWindow>
  )
}
