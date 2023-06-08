import { VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/utils/style.utils';

import { buttonStyles } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {}

export const Button: React.FC<ButtonProps> = ({ className, variant, size, ...props }) => (
	<button className={cn(buttonStyles({ variant, className, size }))} {...props} />
);
