import './CustomSytles.css';
import Input from './components/Input';
import MonthSlider from './components/MonthSlider';
import NavBar from './components/NavBar';
import BudgetContext from './context/budgetContext';

function App() {
  return (
    <div className="App">
        <BudgetContext>
        <NavBar/>
        <div className='home'>
                <MonthSlider/>
                <Input/>
        </div>
        </BudgetContext>
    </div>
  );
}

export default App;
