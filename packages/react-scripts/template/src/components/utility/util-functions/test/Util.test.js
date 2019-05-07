import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as Util from 'utility/util-functions/Util';

configure({ adapter: new Adapter() });

describe('Util.getPercentFromDecimal', () => {
	it('should return a string to two decimal places', () => {
		const result1 = Util.getPercentFromDecimal(0.1);
		const result2 = Util.getPercentFromDecimal(0.1787);

		expect(result1).toBe('10.00');
		expect(result2).toBe('17.87');
	})
	it('should handle string input', () => {
		const result1 = Util.getPercentFromDecimal('.135');
		const result2 = Util.getPercentFromDecimal('0');

		expect(result1).toBe('13.50');
		expect(result2).toBe('0.00');
	})
})
describe('Util.truncateTo', () => {
	it('should return a number to specified number of decimal places', () => {
		const result1 = Util.truncateTo(0.1, 2);
		const result2 = Util.truncateTo(10, 2);	
		const result3 = Util.truncateTo(0.1787, 2);		
		const result4 = Util.truncateTo(1294.12891, 3);

		expect(result1).toBe('0.10');
		expect(result2).toBe('10.00');
		expect(result3).toBe('0.17');
		expect(result4).toBe('1294.128');
	})
	it('should truncate not round', () => {
		const result1 = Util.truncateTo(0.1099999, 2);

		expect(result1).toBe('0.10');
	})
	it('should accept . as input', () => {
		const result1 = Util.truncateTo('.', 2);

		expect(result1).toBe('0.00');
	})
})
describe('Util.getValidDecimal', () => {
	it('should accept empty string as input', () => {
		const result1 = Util.getValidDecimal('');

		expect(result1).toBe('');
	})
	it('should accept decimal as input', () => {
		const result1 = Util.getValidDecimal('.');

		expect(result1).toBe('0.');
	})
	it('should return the number as a string if valid', () => {
		const result1 = Util.getValidDecimal(10);
		const result2 = Util.getValidDecimal(125.1349);	

		expect(result1).toBe('10');
		expect(result2).toBe('125.1349');
	})
	it('should return absolute value of number as a string', () => {
		const result1 = Util.getValidDecimal(-10);
		const result2 = Util.getValidDecimal(-125.1349);	

		expect(result1).toBe('10');
		expect(result2).toBe('125.1349');
	})
	it('should remove non-numeric characters', () => {
		const result1 = Util.getValidDecimal('-10.abc');
		const result2 = Util.getValidDecimal('1a2b3c');	

		expect(result1).toBe('10.');
		expect(result2).toBe('123');
	})
	it('should remove all but first decimal', () => {
		const result1 = Util.getValidDecimal('12.34.5');
		const result2 = Util.getValidDecimal('.01.01');	

		expect(result1).toBe('12.345');
		expect(result2).toBe('.0101');
	})
})
describe('Util.removeFloatingPointPrecisionError', () => {
	it('should return zero if not a number', () => {
		const resultUndefined = Util.removeFloatingPointPrecisionError();
		const resultNull = Util.removeFloatingPointPrecisionError(null);

		expect(resultUndefined).toEqual(0);
		expect(resultNull).toEqual(0);
	})
	it('should remove precision error', () => {
		let i = 1;
		let j;
		let diff;
		while (i < 100) {
			j = 1;
			while (j < 10) {
				diff = Util.removeFloatingPointPrecisionError(j/i) - parseFloat((j/i).toFixed(6));
				expect(diff).toEqual(0);
				j += 1;
			}
			i += 1;
		}
	})
})
describe('Util.getNestedProp', () => {
	it('should return value', () => {
		const testObj = {
			something: {
				else: {
					value: 'welcome'
				}
			}
		};

		expect(Util.getNestedProp(testObj, o => o.something.else.value)).toBe('welcome');
	});

	it('should return null if not available', () => {
		const testObj = {};
		expect(Util.getNestedProp(testObj, o => o.aint.there)).toBe(null);
	});

	it('should return fallback if not available', () => {
		const testObj = {};
		expect(Util.getNestedProp(testObj, o => o.aint.there, '-')).toBe('-');
	});
});