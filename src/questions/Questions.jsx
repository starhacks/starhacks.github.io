import React from 'react';
import PropTypes from 'prop-types';

const Questions = (props) =>
    <div className="questions">
        <div className="questions-panel">

        </div>
        <div className="questions-panel">

        </div>
    </div>;

Questions.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Questions;