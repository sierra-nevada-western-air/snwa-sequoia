export default interface IUseInput {
	value: string;
	setValue(value: string): void;
	valid: boolean;
	setValid(valid: boolean): void;
	errorMessage: string;
	setErrorMessage(errorMessage: string): void;
}
