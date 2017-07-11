import React from "react";
import $ from "jquery";
import "selectize";

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const $select = $(this.select);

    $select.selectize(this.props.options);

    $select.on("change", this.onChange);
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

  render() {
    let selectProps = { ...this.props };
    delete selectProps.options;

    return (
      <select
        {...selectProps}
        ref={select => {
          this.select = select;
        }}
      >
        {this.props.children}
      </select>
    );
  }
}

export default Select;
