import * as ModelBuildTagsFactory from 'model-build/factory/ModelBuildTagsFactory';
import * as FundsFactory from 'funds/factory/FundsFactory';

export function searchData(data, searchOn, term) {
	let i;
	term = term ? term.toLowerCase() : '';

	if (term.length === 0) {
		return data;
	}

	return data.filter(item => {
		for (i = 0; i < searchOn.length; i += 1) {
			if (item[searchOn[i]]) {
				if (item[searchOn[i]].toString().toLowerCase().indexOf(term) > -1) {
					return true;
				}
			}
		}
		return false;
	});
}

export function filterData(data, filters) {
	let i; 
	let prop; 
	let acceptedValues;
	let tempProp;
	let tempVal;

	return data.filter(item => {
		for (i = 0; i < filters.length; i += 1) {
			prop = filters[i].prop;
			acceptedValues = filters[i].acceptedValues;

			if (acceptedValues.length > 0) {
				if (item[prop]) {
					tempVal = item[prop];
				} else {
					if (prop.startsWith('model-tag-')) {
						tempProp = prop.split('model-tag-');
						tempVal = ModelBuildTagsFactory.getModelTagOfCategory(item, tempProp[1]);
						if (tempVal) {
							tempVal = tempVal.id;
						}
					} else if (prop.startsWith('fund-favorite') && item.portfolioNumber) {
						tempVal = FundsFactory.isFundFavorite(item.portfolioNumber);
						acceptedValues = [true];
					}
				}
				if (acceptedValues.indexOf(tempVal) === -1) {
					return false;
				}
			}
		}
		return true;
	});
}

export default {
	searchData,
	filterData
}