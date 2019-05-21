import React from 'react';
import App from '../client/src/components/App.jsx';
import Enzyme, { shallow, render, mount } from 'enzyme';

describe('App component', () => {
  it('should have a hellow wurld', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('HELLOW WURLD');
  });
});
