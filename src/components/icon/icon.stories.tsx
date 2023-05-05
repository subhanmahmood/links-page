import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Icon from './icon.component';
import iconConfig from './icon.config';

export default {
	title: 'Icon',
	component: Icon,
	argTypes: {
		name: {
			type: 'string',
			control: { type: 'select' },
			options: Object.keys(iconConfig),
		},
		color: {
			control: { type: 'color' },
		},
		height: {
			type: 'number',
		},
		width: {
			type: 'number',
		},
	},
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => (
	// @ts-ignore
	<Icon {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	name: 'ArrowRight',
};
