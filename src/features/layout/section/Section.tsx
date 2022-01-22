import { ReactNode } from 'react';
import { SectionSize } from './SectionSize';

const Section: React.FC<SectionProps> = ({ children, size = SectionSize.Small }) => {
	const determineSize = (): string => {
		switch (size) {
			case SectionSize.Small:
				return 'py-12 px-6';
			case SectionSize.Medium:
				return 'py-36 px-16';
			case SectionSize.Large:
				return 'py-72 px-24';
		}
	};

	return <section className={`lg:p-12 ${determineSize()}`}>{children}</section>;
};

interface SectionProps {
	children: ReactNode;
	size?: SectionSize;
}

export default Section;
