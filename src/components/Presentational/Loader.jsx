import React from 'react';
import PropTypes from 'prop-types';


export default function Loader(props) {
    Loader.propTypes = {
        isLoading: PropTypes.bool.isRequired,
        isError: PropTypes.bool.isRequired,
    };

    const { isLoading, isError } = props;

    return (
        <div>
            {isError
                ? <div style={{ margin: '35px 130px' }}>Oops, something went wrong...</div>
                : isLoading
                    ? <div style={{ margin: '35px 130px' }}>Loading...</div>
                    : null
            }
        </div>
    );
}
