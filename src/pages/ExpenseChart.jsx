import React, { useContext } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { BudgetDataContext } from '../context/budgetContext';
import { Box, Button } from '@mui/material';

const ExpenseChart = ({ setVisualize }) => {
  const { rows, current } = useContext(BudgetDataContext);

  const categoryOptions = ['Rent', 'Travel', 'Food', 'Entertainment', 'Bonus', 'Utilities', 'Mortgage', 'Others'];
const colorOptions = ["red","blue","green","orange","pink","yellow","purple","gray"]
  const categoryData = categoryOptions.reduce((acc, category) => {
    acc[category] = 0;
    return acc;
  }, {});

  rows[current.month].forEach((expense) => {
    if (expense.type === false) {
      const category = expense.category;
      categoryData[category] += expense.amount;
    }
  });

  const pieChartData = Object.entries(categoryData).map(([label, value], index) => ({
    id: index,
    value,
    label,
    color:colorOptions[index]
  }));
console.log(pieChartData);
  return (
    <div>
      <Button variant="contained" onClick={() => setVisualize(false)}>
        Back
      </Button>
      <PieChart colors={colorOptions} series={[{ data: pieChartData }]} width={700} height={400} />
    </div>
  );
};

export default ExpenseChart;
