import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  static propTypes = {
    onInputChanged: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { isValid: false };
  }

  onChange(event) {
    const value = event.currentTarget.value;

    if (value.length > 0) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }

    this.props.onInputChanged(value, this.state.isValid);
  }

  render() {
    const style = this.state.isValid ? { display: 'none' } : { display: 'inline' };
    const { placeholder, value } = this.props;

    return (
      <div>
        <input type="text"
               onChange={this.onChange.bind(this)}
               placeholder={placeholder}
               value={value}
        />
        <label style={style}>To pole jest wymagane!</label>
      </div>
    );
  }
}

export default TextInput;
