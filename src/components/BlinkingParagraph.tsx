import React from 'react'
import PropTypes from 'prop-types'

function BlinkingParagraph(props: { text: string, style: Object}) {

    function flashText() {
        const text = document.getElementById("flashing-text");
        if (text) {
            text.classList.toggle("cursor-blink");
        }
    }
    setInterval(flashText, 500);

  return (
    <p id='flashing-text' style={props.style}>
        {props.text}
    </p>
  )
}

BlinkingParagraph.propTypes = {
    text: String,
    style: Object
}

export default BlinkingParagraph
