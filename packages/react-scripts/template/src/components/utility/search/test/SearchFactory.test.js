import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as SearchFactory from 'utility/search/factory/SearchFactory';

configure({ adapter: new Adapter() });

describe('SearchFactory.searchData', () => {
	it('should return original array if no search term', () => {
		const data = [{id: 1}]
		const result1 = SearchFactory.searchData(data, ['id'], '');
		const result2 = SearchFactory.searchData(data, ['id'], null);

		expect(result1.length).toBe(1);
		expect(result2.length).toBe(1);
	})
	it('should return empty array if no matches', () => {
		const data = [{id: 1}]
		const result1 = SearchFactory.searchData(data, ['id'], 'id');

		expect(result1.length).toBe(0);
	})
	it('should search on properties with non-string values', () => {
		const data = [{id: 1}]
		const result1 = SearchFactory.searchData(data, ['id'], '1');

		expect(result1.length).toBe(1);
	})
	it('should search on specified properties', () => {
		const data = [{id: 1, name: 'item-1'}, {id: 2, name: 'item-2'}]
		const result1 = SearchFactory.searchData(data, ['name'], '2');
		const result2 = SearchFactory.searchData(data, ['name'], 'item');

		expect(result1.length).toBe(1);
		expect(result2.length).toBe(2);
	})
	it('should be case insensitive', () => {
		const data = [{id: 1, name: 'item-1'}, {id: 2, name: 'item-2'}]
		const result1 = SearchFactory.searchData(data, ['name'], 'item');
		const result2 = SearchFactory.searchData(data, ['name'], 'Item');

		expect(result1.length).toBe(2);
		expect(result2.length).toBe(2);
	})
	it('should be search multiple properties', () => {
		const data = [{id: 1, name: 'item-1', prop2: '1'}, {id: 2, name: 'item-2', prop2: '1'}]
		const result1 = SearchFactory.searchData(data, ['name', 'prop2'], '1');

		expect(result1.length).toBe(2);
	})
	it('should match whole word at any position in property', () => {
		const data = [{id: 1, name: 'item 1 name'}, {id: 2, name: 'item name'}]
		const result1 = SearchFactory.searchData(data, ['name'], '1 name');

		expect(result1.length).toBe(1);
		expect(result1[0].id).toBe(1);
	})
})

describe('SearchFactory.filterData', () => {
	let filters = [
		{
			prop: 'prop1',
			acceptedValues: []
		}
	]
	let data = [
		{
			prop1: 'item1-prop1',
			id: 'id-1'
		},
		{
			prop1: 'item2-prop1',
			id: 'id-2'
		}
	]
	it('should return original array if no acceptedValues', () => {
		const result1 = SearchFactory.filterData(data, filters);

		expect(result1.length).toBe(2);
		expect(result1[0].id).toBe('id-1')
	})
	it('should filter on property if it exists in data', () => {
		filters[0].acceptedValues = ['item1-prop1'];

		const result1 = SearchFactory.filterData(data, filters);

		expect(result1.length).toBe(1);
		expect(result1[0].id).toBe('id-1');
	})
	it('should filter on property if it does not exists in data', () => {
		filters[0].acceptedValues = ['item1-prop1'];
		data.push({id: 'id-3'})
		
		const result1 = SearchFactory.filterData(data, filters);

		expect(result1.length).toBe(1);
		expect(result1[0].id).toBe('id-1');
	})
	it('should OR multiple acceptedValues in filter', () => {
		filters[0].acceptedValues = ['item1-prop1', 'item3-prop1'];
		data[2].prop1 = 'item3-prop1';
		
		const result1 = SearchFactory.filterData(data, filters);

		expect(result1.length).toBe(2);
		expect(result1[0].id).toBe('id-1');
		expect(result1[1].id).toBe('id-3');
	})
	it('should AND multiple filters', () => {
		filters[0].acceptedValues = ['item1-prop1'];
		filters[1] = {prop: 'id', acceptedValues: ['id-1']};

		const result1 = SearchFactory.filterData(data, filters);

		expect(result1.length).toBe(1);
		expect(result1[0].id).toBe('id-1');
	})
})