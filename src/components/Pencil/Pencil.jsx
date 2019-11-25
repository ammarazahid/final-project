import React, { Component } from 'react';

import PropTypes from 'prop-types';



function Pencil(props) {
    return (
        <>
     <h1>Lip Pencils</h1>
     

        </>
    )
}

Pencil.propTypes = {
    name: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
}

export default Pencil;
