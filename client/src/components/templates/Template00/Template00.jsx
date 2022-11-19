import React from 'react'
import PropTypes from 'prop-types'

export function Template00({ editable }) {
    return <h1 contentEditable={editable || 'false'}>Template 00</h1>
}

Template00.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}
