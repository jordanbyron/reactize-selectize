jest.dontMock('../components/Select');

import React, { TestUtils } from 'react';
import { shallow, mount, render } from 'enzyme';
import Select from '../components/Select';
// import renderer from 'react-test-renderer';

// TODO
// data-include-blank
// options => placeholder, selectOnTab, highlight
// onChange
// name
// style

// TODO
// componentDidMount
// componentWillUnmount

describe('<Select />', () => {
  const employees = [
    <option value={1} key={1}>Hunter Stevens</option>,
    <option value={2} key={2}>Jordan Byron</option>,
    <option value={3} key={3}>Brad Ediger</option>
  ]

  let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(
  //     <Select
  //       value=""
  //       onChange={(e) => console.log(e.target.value, e.target.innerText)}
  //       className="test"
  //       name="workers"
  //       style={{ width: 300 }}
  //     />
  //   );
  // });

  it('contains a select.testing element', () => {
    wrapper = shallow(<Select className="testing" />)

    expect(wrapper.find('select.testing')).toBeDefined;
  });

  it('contains no options when not specified', () => {
    wrapper = shallow(<Select />)

    expect(wrapper.find('option')).toNotBeDefined;
  });

  xit('contains two options when passed as children', () => {
    wrapper = mount(<Select>{employees}</Select>);

    expect(wrapper).toHaveProperty('component.props.props.children');

    // expect(wrapper.props.children).toEqual(
    //   expect.arrayContaining(employees)
    // );
  });

  xit('', () => {
  });
});

