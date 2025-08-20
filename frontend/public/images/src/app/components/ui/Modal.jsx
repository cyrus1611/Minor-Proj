// frontend/src/components/ui/Modal.jsx

import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all sm:max-w-lg sm:w-full">
        <div className="px-6 py-4">
          {children}
        </div>
        <div className="px-6 py-4 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;