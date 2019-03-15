import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({ name, val, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <input
        type={name}
        name={name}
        className="form-control form-control-lg"
        placeholder={`Enter ${name}...`}
        value={val}
        onChange={onChange}
      />
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
