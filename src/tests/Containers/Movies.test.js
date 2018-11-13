//__tests__    


import React from 'react';
import { mount, configure } from 'enzyme';
import Movies from '../../components/Containers/Movies'
import Adapter from 'enzyme-adapter-react-16';


beforeEach(function(){
    routes = <Router history={history}><Route path="/series" component={Movies} /></Router>;
});

 configure({ adapter: new Adapter() });
 describe('LoadingIndicator', () => {
  describe('when isLoading is false', () => {
    it('should render children', () => {
      const wrapper = mount(
        <Movies>
          <div>ahoy!</div>
        </Movies>
      );
      expect(wrapper.html()).toEqual('<div>ahoy!</div>')
      wrapper.unmount();
    });
  });
});
