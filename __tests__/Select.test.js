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

  describe('when mounted', () => {
    it('always renders a div', () => {
      expect(selectComponent().find('div')).toHaveLength(1);
    });

    it('always renders a select', () => {
      expect(selectComponent().find('select')).toHaveLength(1);
    });

    it('always renders .selectize-input', () => {
      expect(selectComponent().html()).toEqual(
        expect.stringContaining('selectize-input')
      );
    });
  });

  it('passes props down to select tag', () => {
    props = { className: 'testing' };

    const select = selectComponent().find('select');
    const div = selectComponent().find('div');

    // Includes `children` property
    expect(Object.keys(select.props())).toHaveLength(2);
    expect(select.hasClass('testing')).toBe(true);
    expect(div.hasClass('testing')).toBe(false);
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

  describe('when using the Selectize API', () => {
    describe('when `options` is undefined', () => {
      it('does not render .option', () => {
        expect(selectComponent().html()).not.toEqual(
          expect.stringContaining('div class="option" data-selectable')
        );
      });
    });

    describe('when `options` is defined', () => {
      xit('renders 3 .option elements under .selectize-dropdown-context', () => {
        const animals = [
          { value: 'dog', name: 'Dog' },
          { value: 'cat', name: 'Cat' },
          { value: 'duck', name: 'Duck' },
        ];

        props.options = { options: animals };

        const { options } = selectComponent().node.props.options;

        expect(options).toHaveLength(3);
        expect(options).toEqual(expect.arrayContaining(animals));
        // expect(selectComponent().find('option')).toHaveLength(3);
      });

      xit('renders 2 .optgroup elements, with 3 .option each, under .selectize-dropdown-context', () => {
        const animals = {
          options: [
            { class: 'mammal', value: 'dog', name: 'Dog' },
            { class: 'mammal', value: 'cat', name: 'Cat' },
            { class: 'bird', value: 'duck', name: 'Duck' },
            { class: 'bird', value: 'chicken', name: 'Chicken' },
            { class: 'reptile', value: 'snake', name: 'Snake' },
            { class: 'reptile', value: 'lizard', name: 'Lizard' }
          ],
          optgroups: [
            { value: 'mammal', label: 'Mammal' },
            { value: 'bird', label: 'Bird' },
            { value: 'reptile', label: 'Reptile' }
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
  });
});
