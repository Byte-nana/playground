import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  let [count, setCount] = useState([0, 0, 0]);
  let [date, setDate] = useState([new Date(), new Date(), new Date()]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let newTitle = [...title];
          newTitle.sort();
          setTitle(newTitle);
        }}
      >
        Sort
      </button>
      <button
        onClick={() => {
          let newTitle = [...title];
          newTitle[0] = '여자 코트 추천';
          setTitle(newTitle);
        }}
      >
        Edit
      </button>

      {title.map((item, i) => {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal((prev) => !prev);
                setModalTitle(i);
              }}
            >
              {item}{' '}
              <span
                onClick={() => {
                  let newCount = [...count];
                  newCount[i] += 1;
                  setCount(newCount);
                }}
              >
                👍
              </span>{' '}
              {count[i]}
            </h4>
            <p>
              {date[i].toLocaleDateString('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
            <button
              onClick={() => {
                let newTitle = [...title];
                newTitle.splice(i, 1);
                setTitle(newTitle);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}

      <input
        type='text'
        onChange={(e) => {
          setInputValue(e.target.value.trim());
        }}
      />
      <button
        onClick={() => {
          if (!inputValue) return;
          setTitle([inputValue, ...title]);
          setInputValue('');

          let newCount = [...count];
          newCount.unshift(0);
          setCount(newCount);

          let newDate = [new Date(), ...date];
          setDate(newDate);
        }}
      >
        Save
      </button>

      {modal && (
        <Modal title={title} setTitle={setTitle} modalTitle={modalTitle} />
      )}
    </div>
  );
}

function Modal({ title, setTitle, modalTitle }) {
  return (
    <div className='modal'>
      <h4>{title[modalTitle]}</h4>
      <p>Date</p>
      <p>Content</p>
      <button
        onClick={() => {
          let newTitle = [...title];
          newTitle[0] = '여자 코트 추천';
          setTitle(newTitle);
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default App;
