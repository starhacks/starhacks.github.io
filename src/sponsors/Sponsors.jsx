import React from 'react';
import PropTypes from 'prop-types';

const Sponsors = (props) =>
    <div className="sponsors">
        <h2>
            {props.title}
        </h2>
        <p>Want to sponsor us? Contact us at [@]</p>
    </div>;

Sponsors.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Sponsors;