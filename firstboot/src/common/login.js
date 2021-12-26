import React, { Component } from "react";

class LoggedIn extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="user-btn-group">
                <span className="mr-3">{this.props.userNickname}님 환영합니다!</span>
                <a role='button' className="mr-2 text-white">로그아웃</a>
                <a role='button' className="text-white" href="/mypage">마이페이지</a>
            </div>
        )
    }
}
class LoggedOut extends Component{
    render(){
        return(
            <div className="user-btn-group">
                <a role='button'>로그인</a>
                <span className="mx-2">|</span>
                <a role='button'>회원가입</a>
            </div>
        )
    }
}

export {LoggedIn,LoggedOut}