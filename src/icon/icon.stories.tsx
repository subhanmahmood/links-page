import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Icon from './icon.component';

export default {
	title: 'GearSection',
	component: Icon,
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
