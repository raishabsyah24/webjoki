import logo from '../logo.svg';
import '../App.css';
import Skripsi from './Skripsi';

import { Link } from 'react-router-dom';

function Splash() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selamat Datang
        </p>
        <p>Contact Us</p>
        <Link to="/Skripsi">skripsi</Link>
        <a
          href={Skripsi}
        >
          Instagram
        </a>
      </header>
    </div>
  );
}

export default Splash;
