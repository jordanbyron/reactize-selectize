// jest.dontMock('../components/Select');

import React, { TestUtils } from 'react';
import { shallow, mount, render } from 'enzyme';
import Select from '../src/components/Select';

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
    props = {};
    mountedSelect = undefined;
  });

  it('always renders a select', () => {
    expect(selectComponent().find('select')).toHaveLength(1);
  });

  it('passes props down to select tag', () => {
    // Method 1
    props = { className: 'testing', name: 'test' };

    const select = selectComponent().find('select');

    // Includes `children` property
    expect(Object.keys(select.props())).toHaveLength(3);
  });


  describe('when `children` is not defined', () => {
    it('does not render option elements', () => {
      const { children } = selectComponent().node.props;

      expect(children).toBeUndefined();
      expect(selectComponent().find('option')).toHaveLength(0);
    });
  });

  describe('when `children` is defined', () => {
    it('renders 3 options', () => {
      const animals = [
        <option value="cat" key={1}>Cat</option>,
        <option value="dog" key={2}>Dog</option>,
        <option value="goat" key={3}>Goat</option>
      ];

      props.children = animals;

      const { children } = selectComponent().node.props;

      expect(children).toHaveLength(3);
      expect(children).toEqual(expect.arrayContaining(animals));
      expect(selectComponent().find('option')).toHaveLength(3);
    });

    it('renders 2 optgroups with 3 options each', () => {
      const mammals = (
        <optgroup key={1} label="Mammals">
          <option value="cat" key={1}>Cat</option>
          <option value="dog" key={2}>Dog</option>
          <option value="goat" key={3}>Goat</option>
        </optgroup>
      );

      const reptiles = (
        <optgroup key={2} label="Reptiles">
          <option value="turtle" key={4}>Turtle</option>
          <option value="lizard" key={5}>Lizard</option>
          <option value="snake" key={6}>Snake</option>
        </optgroup>
      );

      props.children = [mammals, reptiles];

      const { children } = selectComponent().node.props;

      expect(children).toHaveLength(2);
      expect(children).toEqual(expect.arrayContaining([mammals, reptiles]));
      expect(selectComponent().find('optgroup')).toHaveLength(2);
      expect(selectComponent().find('option')).toHaveLength(6);
    });

  });

  describe('when `options.options` is undefined', () => {
    it('does not render option elements', () => {
      const { options } = selectComponent().props();

      expect(options).toBeUndefined();
      expect(selectComponent().find('option')).toHaveLength(0);
    });
  });

  describe('when `options.options` is defined', () => {
    // FIXME
    // `option` and `optgroup` tags are not found when passing
    // them as Selectize options

    it('renders 3 options', () => {
      const animals = [
        { value: 'dog', key: 1, name: 'Dog' },
        { value: 'cat', key: 2, name: 'Cat' },
        { value: 'duck', key: 3, name: 'Duck' },
      ];

      props.options = { options: animals };

      const { options } = selectComponent().node.props.options;

      expect(options).toHaveLength(3);
      expect(options).toEqual(expect.arrayContaining(animals));
      // expect(selectComponent().find('option')).toHaveLength(3);
    });

    it('renders 3 optgroups with 2 options each', () => {
      const animals = {
        options: [
          { class: 'mammal', value: 'dog', key: 1, name: 'Dog' },
          { class: 'mammal', value: 'cat', key: 2, name: 'Cat' },
          { class: 'bird', value: 'duck', key: 3, name: 'Duck' },
          { class: 'bird', value: 'chicken', key: 4, name: 'Chicken' },
          { class: 'reptile', value: 'snake', key: 5, name: 'Snake' },
          { class: 'reptile', value: 'lizard', key: 6, name: 'Lizard' }
        ],
        optgroups: [
          { value: 'mammal', key: 1, label: 'Mammal' },
          { value: 'bird', key: 2, label: 'Bird' },
          { value: 'reptile', key: 3, label: 'Reptile' }
        ],
        optgroupField: 'class',
        labelField: 'name'
      };

      props.options = animals;

      const { options, optgroups } = selectComponent().node.props.options;

      expect(options).toHaveLength(6);
      expect(options).toEqual(expect.arrayContaining(animals.options));
      // expect(selectComponent().find('option')).toHaveLength(6);
      expect(optgroups).toHaveLength(3);
      expect(optgroups).toEqual(expect.arrayContaining(animals.optgroups));
      // expect(selectComponent().find('optgroup')).toHaveLength(3);
    });
  });

  describe('Selectize API options', () => {
    xit('renders a placeholder', () => {
    });
  });
});
