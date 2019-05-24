import React, { Component } from 'react';
class ToggleButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
      this.buttonName=props.buttonName;
      
      this.handleClick = this.handleClick.bind(this);
    }

   
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
      if(this.state.isToggleOn){
        this.props.changvalue(this.buttonName);
        this.props.removeMethod();
      }else{
        this.props.changvalue(this.buttonName);
        this.props.addMethod();
      }
    }
  
    render() {
      return (
        <button type="button" className={this.state.isToggleOn ? 'btn btn-dark' : 'btn btn-light'} onClick={this.handleClick}>
          {this.buttonName}
        </button>
      );
    }
  }
  
  export default ToggleButton;