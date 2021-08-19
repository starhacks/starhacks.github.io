import React from 'react';
import PropTypes from 'prop-types';

const Anecdotes = (props) =>
    <div className="anecdotes">
        <h2>{props.title}</h2>
    </div>;

Anecdotes.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Anecdotes;