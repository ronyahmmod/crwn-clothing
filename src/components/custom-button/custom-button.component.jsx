import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${
        otherProps.isgoogle ? 'custom-button--blue' : 'custom-button--white'
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
