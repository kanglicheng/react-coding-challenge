// __tests__


import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Series from '../../components/Containers/Series';
import testData from '../../../feed/sample.json';


configure({ adapter: new Adapter() });
describe('Series component: ', () => {
    let shallowWrap, fullWrap;
    beforeAll(() => {
        shallowWrap = shallow(<Series />);
        fullWrap = mount(<Series route="Series"/>);
      });
    afterAll(() => {
        shallowWrap.unmount();
        fullWrap.unmount();
    })

    it('checking that the correct title is displayed in header', () => {
        expect(fullWrap.find('.lower').text()).toEqual('Popular Series');
    });


    it('checking API response', () => {
        // shallowWrap.instance().componentDidMount();
        // shallowWrap.update();
        // expect(shallowWrap.state().items).toEqual(testData);
        expect(shallowWrap.state().items).toEqual([]);
    });


    it('check whether loader is present', () => {
        expect(shallowWrap.state('isLoading')).toEqual(true);
    });


    it('check how many times render is called', () => {
        const spy = jest.spyOn(Series.prototype, 'render');
        const wrapper = shallow(<Series />);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});

global.fetch = jest.fn(() => Promise.resolve(testData));