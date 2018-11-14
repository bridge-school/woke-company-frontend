import React from 'react';

const CertifiedButton = ({
	handleClick,
	children
}) => {
	return (
		<button
          className="border border-black p-2 mt-4"
          type="button"
          onClick={handleClick}
        >
          {children}
        </button>
	)
}

export default CertifiedButton;