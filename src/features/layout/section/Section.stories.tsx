import Section from './Section';
import { ComponentMeta } from '@storybook/react';
import { SectionSize } from './SectionSize';

const SectionStory: ComponentMeta<typeof Section> = {
	title: 'Layout/Section',
	component: Section,
};

export default SectionStory;

export const Small = (): JSX.Element => <Section>I am a section.</Section>;

export const Medium = (): JSX.Element => <Section size={SectionSize.Medium}>I am a medium section.</Section>;

export const Large = (): JSX.Element => <Section size={SectionSize.Large}>I am a large section.</Section>;
