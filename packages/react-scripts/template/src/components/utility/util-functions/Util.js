import * as $ from 'jquery';

export function getPercentFromDecimal(dec, digits) {
	return (dec * 100).toFixed(digits || 2);
}

export function getDecimalFromPercent(pct) {
	return (pct / 100);
}

export function truncateTo(n, digits) {
	if (digits === undefined) {
		digits = 0;
	}
	n = isNaN(n) ? 0 : n;

	const multiplicator = Math.pow(10, digits);
	n = parseFloat((n * multiplicator).toFixed(11));
	return (Math.floor(n) / multiplicator).toFixed(digits);
}

export function getValidDecimal (num) {
	let val = num.toString().replace(/[^\d.]+/g, "");

	val = val.split('.');
	const isDecimal = val.length > 1;

	if (isDecimal) {
		val[0] += '.';
	}

	val = val.join('');

	if (val === '.') {
		return '0.';
	}

	return val;
}

export function getNumberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function animateScrollTo(fromThis, toThis, speed) { 
	$(fromThis).animate({
		scrollTop:  $(fromThis).scrollTop() - $(fromThis).offset().top + $(toThis).offset().top 
	}, speed || 0); 
	return fromThis; 
};

export function removeFloatingPointPrecisionError(val) {
	// this is used for calculating position, not display values
	if (val > 0) {
		return parseFloat(val.toFixed(6));
	}
	return 0;
}

export function getNestedProp(objectToAccess, propAccessor, fallbackOnUndefined = null) {
	try {
		return propAccessor(objectToAccess);
	} catch (_) {
		return fallbackOnUndefined;
	}
}

export default {
	getPercentFromDecimal,
	getDecimalFromPercent,
	truncateTo,
	getValidDecimal,
	getNumberWithCommas,
	animateScrollTo,
	removeFloatingPointPrecisionError,
	getNestedProp
}