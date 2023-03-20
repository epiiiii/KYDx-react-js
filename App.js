import logonavbar from './Logo Navbar.png';
import polygon1 from './Polygon 1.jpg';
import polygon2 from './Polygon 2.jpg';
import rectangle10 from './Rectangle 10.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="moto">
          <p>We make your business more <font color="1E7F8C">effective</font> and simple</p>
        </div>
        <img src={logonavbar} className="logonavbar"/>
      </header>
    </div>
  );
}

export default App;
