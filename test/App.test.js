import React from 'react';
import App from '../client/src/components/App.jsx';
import Enzyme, { shallow, render, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('should have a function', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('HELLOW WURLD');
  });
});
