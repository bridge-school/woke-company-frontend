import React from 'react';

const CertifiedButton = ({
	handleClick,
	children
}) => {
	return (
		<button
      className="text-center w-full block border border-bridge-pink rounded py-2 px-4 bg-bridge-pink hover:bg-white text-white hover:text-bridge-pink font-bold"x
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
	)
}

export default CertifiedButton;