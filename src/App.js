import './CustomSytles.css';
import MonthSlider from './components/MonthSlider';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div className='home'>
                <MonthSlider/>
        </div>
    </div>
  );
}

export default App;
