jest.dontMock('../components/Select');

import React, { TestUtils } from 'react';
import { shallow, mount, render } from 'enzyme';
import Select from '../components/Select';

// TODO
// options => placeholder, selectOnTab, highlight, options
// onChange
// name
// style
// className

// TODO
// componentDidMount
// componentWillUnmount
// onChange

describe('Select', () => {
  const employees = [
    <option value={1} key={1}>Hunter Stevens</option>,
    <option value={2} key={2}>Jordan Byron</option>,
    <option value={3} key={3}>Brad Ediger</option>
  ]

  let wrapper;

  let props;
  let mountedSelect;

  const selectComponent = () => {
    if (!mountedSelect) {
      mountedSelect = mount(<Select {...props} />);
    }
    return mountedSelect;
  };

  // Resets the props and mountedSelect before every test
  beforeEach(() => {
    wrapper = undefined;
    props = {};
    mountedSelect = undefined;
  });

  it('always renders a select', () => {
    // Method 1 - mounting component
    const selects = selectComponent().find('select');
    expect(selects.length).toEqual(1);

    // Method 2 - using a shallow component
    // wrapper = shallow(<Select />);
    // expect(wrapper.find('select')).toBeDefined;
  });

  it('passes props down to select tag', () => {
    // Method 1
    props = { className: 'testing', name: 'test' };

    const select = selectComponent().find('select');

    // Includes `children` property
    expect(Object.keys(select.props()).length).toBe(3);

    // Method 2
    // props = { className: 'testing', name: 'test', children: undefined };
    //
    // wrapper = shallow(<Select {...props} />);
    //
    // const select = wrapper.find('select').node;
    //
    // expect(select.props).toEqual(props);
  });


  describe('rendered select', () => {
    xit('receives all props passed to Select', () => {
    });
  });

  it('contains no options when not specified', () => {
    wrapper = shallow(<Select />);

    expect(wrapper.find('option')).toNotBeDefined;
  });


  it('contains two options when passed as children', () => {
    wrapper = mount(<Select>{employees}</Select>);
    const { children } = wrapper.node.props;

    expect(children.length).toEqual(3);
    expect(children).toEqual(expect.arrayContaining(employees));
  });
});
