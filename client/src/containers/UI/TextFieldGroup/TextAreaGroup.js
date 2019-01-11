import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaGroup = ({
    name,
    placeholder,
    value,
    error,
    info,
    change
}) => {
    return (
        <div className="form-row">
            <div className="form-group col-md-12">
                <textarea
                  className={classnames('form-control form-control-lg', {
                      'is-invalid': error
                  })}
                  placeholder={placeholder}
                  name={name}
                  value={value}
                  onChange={change} />
                {info && <small className="form-text text-muted">{info}</small>}
                {error && (<div className="invalid-feedback">{error}</div>)}
            </div>
        </div>
    )
}

TextAreaGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    info: PropTypes.string,
    change: PropTypes.func.isRequired
}

export default TextAreaGroup;