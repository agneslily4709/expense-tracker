import { useState } from 'react';
import Input from './components/Input';
import MonthSlider from './components/MonthSlider';
import NavBar from './components/NavBar';
import BudgetContext from './context/budgetContext';
import ExpenseChart from './pages/ExpenseChart';
import ExpenseTable from './pages/ExpenseTable'
import "./Styles/App.css"

function App() {
        const [visualize,setVisualize] = useState(false)
  return (
    <div className="App">
        <BudgetContext>
        <NavBar/>
        <div className='home'>
                <MonthSlider setVisualize={setVisualize}/>
                <Input/>
                {visualize? <ExpenseChart setVisualize={setVisualize}/> :<ExpenseTable/>}
        </div>
        </BudgetContext>
    </div>
  );
}

export default App;
