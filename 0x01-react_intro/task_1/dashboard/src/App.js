import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../../../task_1/dashboard/src/utils';
function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p><i>Copyright {getFullYear()} - {getFooterCopy()}</i></p>
      </div>
    </div>
  );
}

export default App;
