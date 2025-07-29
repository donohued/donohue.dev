import React from 'react'
import GeneralWindow from '../components/GeneralWindow'
import Harold from '../components/windowcontent/Harold'

export default function OverviewWindow(props:{ title: string}) {
  return (
    <GeneralWindow windowTitle='Overview' windowElement={<OverviewWindow title="Overview"/>}>
        <Harold />
    </GeneralWindow>
  )
}
