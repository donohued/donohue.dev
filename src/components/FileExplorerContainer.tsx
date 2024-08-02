import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

interface FileExplorerContainerProps {
    children: ReactNode;
}

function FileExplorerContainer(props: FileExplorerContainerProps) {
    return (
        <div className='file-explorer'>
            <fieldset className='file-explorer-fieldset'>
                <div className='explorer-bar'>
                    <p>File</p>
                    <p>Edit</p>
                    <p>View</p>
                    <p>Go</p>
                    <p>Favorites</p>
                    <p>Help</p>
                </div>
                <hr />
                <div className='explorer-bar'>
                    <p>Back</p>
                    <p>Forward</p>
                    <p>Up</p>
                    <p>Cut</p>
                    <p>Copy</p>
                    <p>Paste</p>
                    <p>Undo</p>
                </div>
                <hr />
                <div className="field-row">
                    <label>Address</label>
                    <select style={{ width: "100%" }}><option>C:\</option></select>
                </div>
            </fieldset>

            <div className="file-explorer-icons">{props.children}</div>

        </div>
    )
}

export default FileExplorerContainer

