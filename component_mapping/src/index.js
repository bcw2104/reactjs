import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [
                { title: 'A에 대한 글', date: '2021-12-11', like: 0 },
                { title: 'C에 대한 글', date: '2021-12-12', like: 0 },
                { title: 'D에 대한 글', date: '2021-12-13', like: 0 },
                { title: 'B에 대한 글', date: '2021-12-14', like: 0 },
                { title: 'E에 대한 글', date: '2021-12-15', like: 0 },
            ]
        };
    }

    likeIncreaseHandler = (idx) =>{
        let copy = {...this.state};
        copy.postList[idx].like++;   

        this.setState(copy);
    }

    render() {
        const mapToComponent = (data) => {
            return data.map((post,idx)=>{
                return (
                    <div className='post-item'>
                        <div className="title" style={{fontSize: '20px'}}>{post.title}</div>
                        <div className='info'>
                            <span className="date mr-3">{post.date}</span>
                            <a role='button' className="like" onClick={()=>{this.likeIncreaseHandler(idx)}}>👍{post.like}</a>
                        </div>
                        <hr />
                    </div>
                );
            })
        };

        return(
            <div className='post-list'>
                {mapToComponent(this.state.postList)}
            </div>
        )
    }
}

class App extends Component {
    render() {
        let grid = {marginTop: '50px' };
        return (
            <div className='container' style={grid}>
                <PostList />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
