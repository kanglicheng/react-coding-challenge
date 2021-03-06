// __tests__


import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Movies from '../../components/Containers/Movies';
import testData from '../../../feed/sample.json';


configure({ adapter: new Adapter() });
describe('Movies component: ', () => {
    let shallowWrap, fullWrap;
    beforeAll(() => {
        shallowWrap = shallow(<Movies />);
        fullWrap = mount(<Movies route="Movies"/>);
      });
    afterAll(() => {
        shallowWrap.unmount();
        fullWrap.unmount();
    })

    it('checking that the correct title is displayed in header', () => {
        expect(fullWrap.find('.lower').text()).toEqual('Popular Movies');
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
        const spy = jest.spyOn(Movies.prototype, 'render');
        const wrapper = shallow(<Movies />);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});

global.fetch = jest.fn(() => Promise.resolve(testData));