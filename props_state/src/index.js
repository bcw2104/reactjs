import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import PropTypes from 'prop-types';

class Content extends React.Component {
    render() {
        return (
            <div className='content-wrap'>
                <h1>Hello React!</h1>
            </div>
        );
    }
}

// Props : 변화하지 않는 데이터를 처리할 때 활용 -> 읽기 전용
class Props extends React.Component {
    render() {
        return (
            <div className='props-wrap'>
                <h3>Props Name : {this.props.name}</h3>
                <div>Props Value : {this.props.value}</div>
                <div>Props Children : {this.props.children}</div>
            </div>
        );
    }
}

// 각 props 속성별 타입 및 필수 검사
Props.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number.isRequired,
};

// props 기본값 세팅
Props.defaultProps = {
    name: 'propsDefault',
    value: 0,
};

// State
class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'defaultStateName',
            value: 0,
        };
    }

    valueAddHandler = () => {
        this.setState({ ...this.state, value: this.state.value + 1 });
    };

    valueSubHandler = () => {
        this.setState({ ...this.state, value: this.state.value - 1 });
    };

    render() {
        return (
            <div className='state-wrap'>
                <h3>State Name : {this.state.name}</h3>
                <div>
                    <span className='mr-3' style={{fontSize: '18px'}}>State Value : {this.state.value}</span>
                    <button
                        className='btn btn-primary'
                        style={{ width: '80px', fontSize: '18px' }}
                        onClick={() => {
                            this.valueAddHandler();
                        }}>
                        add
                    </button>
                    <button
                        className='btn btn-danger'
                        style={{ width: '80px', fontSize: '18px' }}
                        onClick={() => {
                            this.valueSubHandler();
                        }}>
                        sub
                    </button>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
        return (
            <div className='page-wrap'>
                <Header />
                <div className='container my-5'>
                    <Content />
                    <hr />
                    <Props>propsChildren</Props>
                    <hr />
                    <State />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
