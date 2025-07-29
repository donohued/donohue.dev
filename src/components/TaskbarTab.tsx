import React from 'react'
import PropTypes from 'prop-types'

interface TaskbarTabsProps {
    title: string;
}

export default function TaskbarTab(props: TaskbarTabsProps) {
    return (
        <button className='running-application' style={{ height: "26px", width: "194px", margin: "2px", textAlign: "left" }}>
            {props.title}
        </button>
    )
}


