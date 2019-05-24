import React, { Component } from 'react';

class TagsPrint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      list: ["tofu","garlic"],
    };
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onAddItem = () => {
    // not allowed AND not working
    this.setState(state => {
        const list = state.list.concat(state.value);

      return {
        list,
        value: '',
      };
    });
  };

  handleLangChange = () => {
    this.props.onSelectLanguage(this.state.list);            
}


}

export default TagsPrint;