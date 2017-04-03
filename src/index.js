import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ByteContainer, InputArea } from './ByteContainer';
import dotenv from 'dotenv'
import './index.css';

dotenv.config({ silent: true });

ReactDOM.render(
  <ByteContainer />,
  document.getElementById('root')
);
