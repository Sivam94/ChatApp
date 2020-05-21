import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('General');
  const [rooms, setRooms] = useState([
    'General',
    'JavaScript',
    'React',
    'NodeJs',
    'Angular',
  ]);

  return (
    <>
      <h1 className="main-heading">Real Time Chat App</h1>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join Chat</h1>
          <div>
            <input
              placeholder="Name"
              className="joinInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <select
              className="joinInput mt-20"
              onChange={(event) => setRoom(event.target.value)}
            >
              {rooms.map((room) => (
                <option>{room}</option>
              ))}
            </select>
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className={'button mt-20'} type="submit">
              Chat Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
