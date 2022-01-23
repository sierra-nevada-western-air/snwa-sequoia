import { Color } from './Color';

export default function DetermineColor(color: Color): string {
	switch (color) {
		case Color.Primary:
			return 'primary-400';
		case Color.Secondary:
			return 'secondary-500';
		case Color.Tertiary:
			return 'tertiary-500';
		default:
			return '';
	}
}
