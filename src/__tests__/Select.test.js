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

  it('contains no options when not specified', () => {
    wrapper = shallow(<Select />);

    expect(wrapper.find('option')).toNotBeDefined;
  });

  describe('rendered select', () => {
    xit('receives all props passed to Select', () => {
    });
  });

  describe('children', () => {
    it('renders 3 options', () => {
      const animals = [
        <option value="cat" key={1}>Cat</option>,
        <option value="dog" key={2}>Dog</option>,
        <option value="goat" key={3}>Goat</option>
      ];

      wrapper = mount(<Select>{animals}</Select>);
      const { children } = wrapper.node.props;

      expect(wrapper.find('option')).toHaveLength(3);
      expect(children.length).toEqual(3);
      expect(children).toEqual(expect.arrayContaining(animals));
    });

    xit('renders 2 optgroups with 3 options each', () => {
      const mammals = (
        <optgroup label="Mammals">
          <option value="cat" key={1}>Cat</option>
          <option value="dog" key={2}>Dog</option>
          <option value="goat" key={3}>Goat</option>
        </optgroup>
      );

      const reptiles = (
        <optgroup label="Reptiles">
          <option value="turtle" key={4}>Turtle</option>
          <option value="lizard" key={5}>Lizard</option>
          <option value="snake" key={6}>Snake</option>
        </optgroup>
      );

      // create wrapper, or mount component?
    });
  });


  describe('Selectize API options', () => {
    xit('renders a placeholder', () => {
    });

    xit('renders 3 options', () => {
    });

    xit('renders 2 optgroups with 3 options each', () => {
    });
  });
});
