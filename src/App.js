/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  addEventListener('click', () => {});
  let [글제목, 글제목변경] = useState([
    '여름 옷 추천',
    '겨울 옷 추천',
    '봄 옷 추천',
    '가을 옷 추천',
  ]);
  let [따봉, 따봉변경] = useState(0);
  let posts = '을지로 맛집';

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      {/* 1. 블로그 navbar 만들기 */}
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
      <button onClick={제목바꾸기}>제목변경버튼</button>
      <div className="list">
        <h4>
          {글제목[0]}{' '}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{' '}
          {따봉}
        </h4>
        <p>6월 9일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>6월 9일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>6월 9일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[3]}</h3>
        <p>6월 9일 발행</p>
        <hr />
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h1>제목</h1>
      <p>상세내용</p>
    </div>
  );
}

export default App;
