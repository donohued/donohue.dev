import React, { useState } from 'react'
import BlinkingParagraph from './components/BlinkingParagraph';

export default function BootLoader() {

const [bootCheckpoints, setBootCheckpoints] = useState<Boolean[]>([])

    const biosScreen = document.getElementById("bios-screen");
    const bootScreen = document.getElementById("boot-screen");

    const biosTexts = document.querySelectorAll<HTMLElement>(
        ".bios-t1, .bios-t2, .bios-t3, .bios-t4, #bios-final-text"
    );
    
    async function bootSequence() {
        await new Promise((r) => setTimeout(r, 3000));

        setBootCheckpoints([false])
    }

    bootSequence().then(() => {
        //load boot screen
    })

    return (
        <>
            <div className='bios-screen' id='bios-screen'>
                <div className='block1'>
                    <div className='sub-block1'>
                        Softwaremongers ROM BIOS PLUS Version 1.21 R910<br />
                        Copyright (C) 2019-2024, Softwaremongers LLC <br />
                        All Rights Reserved <br /><br />

                        Software Mongers System Magic-Box GXa 133t<br />
                        www.softwaremongers.com<br /><br />

                        Press &lt;Ctrl&gt;&lt;Alt&gt;&lt;Enter&gt; for System Setup
                        <br /><br />
                    </div>
                    <div style={{ flex: 1 }}>
                        <img src="./v2/images/epa.png" alt="epa image" style={{ width: "100%" }} />
                    </div>

                </div>
                <div className='block2'>
                    <BlinkingParagraph style={{fontWeight: "bold", display: "inline", paddingTop: "1px" }} text="_" />
                    
                    <p className="bios-text" id='bt1'>PROCESSOR: Intel Pentium III 600 MHz</p>
                    <p className="bios-text" id='bt2'>MEMORY TEST: 24000K ... OK</p>
                    <br />
                    <p className="bios-text" id='bt3'>Keyboard ... Connected</p>
                    <p className="bios-text" id='bt3'>Mouse ... Connected</p>
                    <br /><br />
                    
                    <BlinkingParagraph style={{display: "inline", paddingTop: "1px"}} text="[PRESS ANY KEY TO CONTINUE]" />
                </div>
            </div>

            <div className='boot-screen' id='boot-screen'>
                <div className='boot-bg' id='boot-bg'>
                    <div className="boot-section1" id="boot-bg-image"></div>
                    <div className="boot-section2" id="boot-loading-bar"></div>
                </div>
            </div>
        </>

    )
}
