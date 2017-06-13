import React from 'react';
import $ from 'jquery';
import 'selectize';
import 'selectize/dist/css/selectize.css';
import 'selectize/dist/css/selectize.bootstrap3.css';

// TODO - pass prop to choose Selectize theme/CSS

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const $select = $(this.select);

    $select.selectize(this.props.options);

    $select.on('change', this.onChange);
  }

  componentWillUnmount() {
    const selectize = this.select.selectize;

    if (selectize) {
      selectize.destroy();
    }
  }

  onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  renderBlank() {
    if (this.props['data-include-blank']) {
      return (
        <option value="">
          {this.props.placeholder || 'Select an option'}
        </option>
      );
    }
  }

  render() {
    let selectProps = { ...this.props };
    delete selectProps.options;

    return (
      <select
        { ...selectProps }
        ref={select => {
          this.select = select;
        }}
      >
        {this.renderBlank()}
        {this.props.children}
      </select>
    );
  }
}

export default Select;
