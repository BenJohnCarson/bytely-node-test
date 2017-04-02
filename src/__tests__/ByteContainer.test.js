import React from 'react';
import ReactDOM from 'react-dom';
import { ByteContainer, InputArea } from '../ByteContainer';
import { shallow, mount, render } from 'enzyme';


describe('ByteContainer', function() {
  it('should render InputArea', function() {
    const wrapper = shallow(<ByteContainer/>);
    expect(wrapper.containsAllMatchingElements([
        <InputArea/>
    ])).toBe(true)
  });
});
