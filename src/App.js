import logo from './logo.svg';
import './App.css';
import gigiImage from './images/gigi.jpg'

function App() {
  return (
    <div className="App">
    <h1>My react App</h1>
    <h2>Betty V</h2>
    <img src={gigiImage} alt = "profile-img" style = {{width: '25%', height: 'auto'}}/>
    </div>
  );
}

export default App;
