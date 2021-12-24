import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let cdata = [
        { title: 'A에 대한 글', date: '2021-12-11', like: 0 },
        { title: 'C에 대한 글', date: '2021-12-12', like: 0 },
        { title: 'D에 대한 글', date: '2021-12-13', like: 0 },
        { title: 'B에 대한 글', date: '2021-12-14', like: 0 },
        { title: 'E에 대한 글', date: '2021-12-15', like: 0 },
    ];

    let [contents, contentM] = useState(cdata);

    const likeIncreaseHandler = (index) => {
        let newArr = [...contents];
        newArr[index] = { ...newArr[index], like: newArr[index].like + 1 };
        contentM(newArr);
    };

    const titleSort = (a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    };

    const sortTitle = () => {
        let newArr = [...contents];
        newArr.sort(titleSort);
        contentM(newArr);
    };

    return (
        <div className='App'>
            <header className='navbar bg-dark navbar-dark fixed-top sticky-top'>
                <div className='navbar-header max-width'>
                    <a href='#' className='navbar-brand'>
                        Logo
                    </a>
                </div>
            </header>
            <div className='container mt-5'>
                <div className='content-wrap'>
                    {contents.map((item, index) => (
                        <div className='content-item'>
                            <div className='content-title'>
                                {item.title}
                                <a
                                    role='button'
                                    onClick={() => {
                                        likeIncreaseHandler(index);
                                    }}>
                                    👍 {item.like}
                                </a>
                            </div>
                            <div className='content-date'>{item.date}</div>
                            <hr />
                        </div>
                    ))}
                </div>
                <button
                    type='button'
                    className='btn btn-dark'
                    onClick={() => {
                        sortTitle();
                    }}>
                    글자 정렬
                </button>
            </div>
            <ContentInfo />
        </div>
    );
}

function ContentInfo() {
    return (
        <div className='content-info'>
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세 내용</p>
        </div>
    );
}

export default App;
