
import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessComponent = () => {
  const location = useLocation();
  const formData = location.state || {};

  return (
    <div>
      <h2>Form Submitted Successfully</h2>
      <ul>
        {Object.keys(formData).map((key) => (
          <li key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {formData[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessComponent;
