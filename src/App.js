import Input from './components/Input';
import MonthSlider from './components/MonthSlider';
import NavBar from './components/NavBar';
import BudgetContext from './context/budgetContext';
import ExpenseTable from './pages/ExpenseTable'
import "./Styles/App.css"

function App() {
  return (
    <div className="App">
        <BudgetContext>
        <NavBar/>
        <div className='home'>
                <MonthSlider/>
                <Input/>
                <ExpenseTable/>
        </div>
        </BudgetContext>
    </div>
  );
}

export default App;
