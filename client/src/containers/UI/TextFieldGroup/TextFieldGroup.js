import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    error,
    type,
    info,
    disabled,
    change
}) => {
    return (
        <div className="form-row">
            <div className="form-group col-md-12">
                <input
                  type={type}
                  className={classnames('form-control form-control-lg', {
                      'is-invalid': error
                  })}
                  placeholder={placeholder}
                  name={name}
                  value={value}
                  onChange={change} 
                  disabled={disabled} />
                {info && <small className="form-text text-muted">{info}</small>}
                {error && (<div className="invalid-feedback">{error}</div>)}
            </div>
        </div>
    )
}

TextFieldGroup.defaultProps = {
    type: 'text'
};

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    info: PropTypes.string,
    change: PropTypes.func.isRequired,
    disabled: PropTypes.string
};

export default TextFieldGroup;