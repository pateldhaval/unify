import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
	return (
		<button className='inline-flex border rounded-lg py-1 px-4' {...rest}>
			{children}
		</button>
	);
};
