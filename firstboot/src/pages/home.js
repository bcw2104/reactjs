import React, { Component } from 'react';

export default class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        msg : "default"
      }
    }
  
    componentDidMount = () => {
      fetch('/api/home')
      .then((response) => response.text())
      .then((message) => {this.setState({msg:message})});
    }
    
    render(){
      return (
        <div>{this.state.msg} hello react</div>
      )
    }
  }