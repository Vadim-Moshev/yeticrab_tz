import React from "react";

import "./index.scss";

const UniversalInput = ({
  labelText,
  required = false,
  name,
  controlType = "input",
  inputType = "text",
  placeholder,
  value,
  onChange,
  additionalTextareaClass = "",
  errorMessage = "",
  ...rest
}) => {
  const asterisk = required && <span className="asterisk">*</span>;
  const errorMessageBlock = errorMessage && (
    <p className="error-message">{errorMessage}</p>
  );
  const errorClassNameForInput = errorMessage ? "error" : "";

  const createControl = () => {
    if (controlType === "input") {
      return (
        <input
          type={inputType}
          className={`universal-input__control ${errorClassNameForInput}`}
          name={name}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          {...rest}
        />
      );
    }

    return (
      <textarea
        className={`universal-input__control ${errorClassNameForInput} ${additionalTextareaClass}`}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        {...rest}
      />
    );
  };

  return (
    <div className="universal-input__wrapper">
      <div className="universal-input__label">
        <span className="text">{labelText}</span>
        {asterisk}
      </div>
      {createControl()}
      {errorMessageBlock}
    </div>
  );
};

export default UniversalInput;
