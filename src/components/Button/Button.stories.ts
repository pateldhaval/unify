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

export const Outline: Story = {
	args: {
		variant: 'outline'
	}
};
