import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
	'inline-flex items-center justify-center border border-transparent rounded-md text-sm font-medium leading-[1.1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
	{
		variants: {
			variant: {
				default: 'bg-primary border-primary text-primary-foreground hover:bg-primary/80',
				secondary: 'bg-secondary border-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive: 'bg-destructive border-destructive text-destructive-foreground hover:bg-destructive/90',
				outline: 'border-input hover:bg-accent hover:text-accent-foreground',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'underline-offset-4 hover:underline text-primary'
			},
			size: {
				default: 'h-9 py-2 px-4',
				sm: 'h-8 px-3 rounded-md',
				lg: 'h-10 px-8 rounded-md'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);
