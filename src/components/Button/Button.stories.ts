import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'Button'
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
	args: {
		size: 'lg'
	}
};

export const Small: Story = {
	args: {
		size: 'sm'
	}
};

export const Secondary: Story = {
	args: {
		variant: 'secondary'
	}
};

export const Destructive: Story = {
	args: {
		variant: 'destructive'
	}
};

export const Outline: Story = {
	args: {
		variant: 'outline'
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost'
	}
};

export const Link: Story = {
	args: {
		variant: 'link'
	}
};
