import React from 'react'
import PropTypes from 'prop-types'

export function Template01({ editable }) {
    return <h1 contentEditable={editable || 'false'}>Template 01</h1>
}

Template01.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}
