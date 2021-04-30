import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter(counter+1);
    }

    const handleSubs = (e) => {
        setCounter( (counter > 0) ? counter-1 : 0);
    }

    const handleClean = (e) => {
        setCounter(0);
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button  onClick={handleAdd} > + </button>
            <button  onClick={handleClean} > Clear </button>
            <button  onClick={handleSubs} > - </button>
        </Fragment>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp
