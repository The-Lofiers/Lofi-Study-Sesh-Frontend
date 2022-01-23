import './styles/Login.css';
import '@mui/system'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="headerText">
        <h1 id='loginTXT'>LOFI<br />STUDY<br />BUDDY</h1>
      </div>
      <div className="loginForm">
        <form>
          <div className="emailInput">
            <input type="text" placeholder="Email" />
          </div>
          <div className="passwordInput">
            <input type="password" placeholder="Password" />
          </div>
        </form>
        <button>Login</button>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}