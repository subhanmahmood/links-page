import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Button from './button.component';

export default {
	title: 'Button',
	component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
	<>
		<Button {...args} />
	</>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	children: 'Button',
	colorScheme: 'blue',
};
