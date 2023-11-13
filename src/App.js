import './CustomSytles.css';
import Input from './components/Input';
import MonthSlider from './components/MonthSlider';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div className='home'>
                <MonthSlider/>
                <Input/>
        </div>
    </div>
  );
}

export default App;
