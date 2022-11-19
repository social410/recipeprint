import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const DefaultWrapper = ({ children }) => {
    return (
        <>
           <Header/>
            {children}
            <Footer/>
        </>
    )
}

DefaultWrapper.propTypes = {
    children: PropTypes.any,
}

export default DefaultWrapper
