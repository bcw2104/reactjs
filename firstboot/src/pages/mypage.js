import React, { Component } from 'react';

export default class Mypage extends Component{
    constructor(props){
      super(props);
      this.state = {
        userId : null,
        userNickname : null
      }
    }
  
    componentDidMount = () => {
      fetch('/api/mypage')
      .then((response) => response.json())
      .then((message) => {this.setState(message)});
    }
    
    render(){
      return (
        <div className='mypage-wrap'>
            <div className="form-group">
                <label>아이디</label>
                <input type="text" className='form-control' id="userId" value={this.state.userId} disabled/>
            </div>
            <div className="form-group">
                <label>닉네임</label>
                <input type="text" className='form-control' id="userId" value={this.state.userNickname} disabled/>
            </div>
        </div>
      )
    }
  }