import Section from './Section';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const SectionStory: ComponentMeta<typeof Section> = {
	title: 'Section',
	component: Section,
};

export default SectionStory;

export const Small = (): JSX.Element => <Section>I am a section.</Section>;
