import { ReactNode } from 'react';
import { SectionSize } from './SectionSize';

const Section: React.FC<SectionProps> = ({ children, size }) => {
	const determineSize = (): string => {
		switch (size) {
			case SectionSize.Medium:
				return 'lg:py-36 lg:px-16';
			case SectionSize.Large:
				return 'lg:py-72 lg:px-24';
			default:
				return 'lg:py-12 lg:px-12';
		}
	};

	return <section className={`py-12 px-6 ${determineSize()}`}>{children}</section>;
};

export interface SectionProps {
	children: ReactNode;
	size?: SectionSize;
}

export default Section;
