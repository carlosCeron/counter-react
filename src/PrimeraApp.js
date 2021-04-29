import React, { Fragment } from 'react';
import PropTypes from 'prop-types'; // command impt


// command rafcp

const PrimeraApp = ({saludo}) => {

    // const saludo = 'Hola mundo 1';

    // console.log(`saludo`, saludo)

    return (
        <Fragment>
            <h1>{saludo}</h1>
            <p>probando un parrafo</p>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

export default PrimeraApp;