import { useState } from 'react';
import './App.css';

function App() {
  let [post, setPost] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  let [index, setIndex] = useState(0);
  let [like, setLike] = useState([0, 0, 0]);
  let [date, setDate] = useState([new Date(), new Date(), new Date()]);
  let [inputValue, setInputValue] = useState('');

  const [modal, setModal] = useState(false);

  return (
    <>
      <nav className='nav'>
        <h1 className='nav__header'>Byte-Nana</h1>
      </nav>
      <section>
        <button
          className='btn'
          onClick={() => {
            let newPost = [...post];
            newPost[0] = '여자 코트 추천';
            setPost(newPost);
          }}
        >
          Change
        </button>
        <button
          className='btn'
          onClick={() => {
            setPost([...post].sort());
          }}
        >
          Sort
        </button>
      </section>

      <div className='add-box'>
        <input
          className='input-add'
          type='text'
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className='btn'
          onClick={() => {
            if (inputValue.trim() === '') {
              return;
            } else {
              setPost([inputValue.trim(), ...post]);

              let newLike = [...like];
              newLike.unshift(0);
              setLike(newLike);

              let newDate = [...date];
              newDate.unshift(new Date());
              setDate(newDate);
            }
          }}
        >
          Add
        </button>
      </div>

      <ul>
        {post.map((posts, i) => {
          return (
            <li className='post__item' key={i}>
              <div className='item__wrapper'>
                <div>
                  <h3>
                    <span
                      onClick={() => {
                        setModal(true);
                        setIndex(i);
                      }}
                    >
                      {posts}
                    </span>
                    <span
                      className='item__like'
                      onClick={() => {
                        let newLike = [...like];
                        newLike[i] += 1;
                        setLike(newLike);
                      }}
                    >
                      👍
                    </span>
                    <span className='item__count'>{like[i]}</span>
                  </h3>
                  <p>{date[i].toLocaleString()}</p>
                </div>

                <button
                  className='btn'
                  onClick={() => {
                    let newPost = [...post];
                    newPost.splice(i, 1);
                    setPost(newPost);
                  }}
                >
                  X
                </button>
              </div>

              <hr />
            </li>
          );
        })}
      </ul>

      {modal && (
        <Modal
          post={post}
          setPost={setPost}
          index={index}
          setModal={setModal}
        />
      )}
    </>
  );
}
function Modal({ post, setPost, index, setModal }) {
  return (
    <section className='modal__box'>
      <h4>{post[index]}</h4>
      <p>Date</p>
      <p>Content</p>
      <button
        className='btn'
        onClick={() => {
          let newPost = [...post];
          newPost[index] = '여자 코트 추천';
          setPost(newPost);
        }}
      >
        Edit
      </button>
      <button className='btn' onClick={() => setModal(false)}>
        Close
      </button>
    </section>
  );
}
export default App;
