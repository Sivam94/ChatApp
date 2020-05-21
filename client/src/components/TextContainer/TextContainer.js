import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <p style={{ marginBottom: '0' }}>Users online</p>
        <div className="activeContainer">
          <p style={{ margin: '0' }}>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                <img
                  alt="Online Icon"
                  src={onlineIcon}
                  style={{ marginRight: '10px' }}
                />
                {name}
              </div>
            ))}
          </p>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
