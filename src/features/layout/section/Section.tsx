import { ReactNode } from 'react';
import { SectionColor } from './SectionColor';
import { SectionSize } from './SectionSize';

const Section: React.FC<SectionProps> = ({ children, size, color }) => {
	const determineSize = (): string => {
		switch (size) {
			case SectionSize.Medium:
				return 'lg:py-36 lg:px-16';
			case SectionSize.Large:
				return 'lg:py-72 lg:px-24';
			default:
				return '';
		}
	};

	const determineBackgroundColor = (): string => {
		switch (color) {
			case SectionColor.Primary:
				return 'bg-teal-500';
			default:
				return '';
		}
	};

	return <section className={`py-12 px-6 lg:py-12 lg:px-12 ${determineSize()} ${determineBackgroundColor()}`}>{children}</section>;
};

interface SectionProps {
	children: ReactNode;
	size?: SectionSize;
	color?: SectionColor;
}

export default Section;
