import React from 'react';


function RegisterSuccessPopup({ onClose }) {
  return (
    <div className="popup-container">
      <div className="popup">
        <h3>Thank you for registering!</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default RegisterSuccessPopup;
