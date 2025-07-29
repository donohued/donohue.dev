import React from 'react'
import BootLoader from './BootLoader';
import Desktop from './Desktop';
import { WindowProvider } from './WindowContext';

export default function Monitor() {
    const bootAnimComplete = false;
    const [skipBoot, setSkipBoot] = React.useState(true);

    return (
        <div className='monitor' id='monitor'>
            <WindowProvider>
                {skipBoot ? <Desktop /> : <BootLoader/>}
                {/*<BootLoader /> */}
            </WindowProvider>



        </div>
    )
}
