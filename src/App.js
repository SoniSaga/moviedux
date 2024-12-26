
import './App.css';
import './styles.css'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <image className='logo' src='logo.png' alt='moviedux'/>
      </div>
      <footer className ="footer">
        <p className='footer'> Footer content here</p>
      </footer>
    </div>
  );
}

export default App;
