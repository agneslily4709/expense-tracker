import React, { useContext, useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { BudgetDataContext } from '../context/budgetContext';
import { Button, Typography } from '@mui/material';

const ExpenseChart = ({ setVisualize }) => {
  const { rows, current } = useContext(BudgetDataContext);

  const categoryOptions = ['Rent', 'Travel', 'Food', 'Entertainment', 'Bonus', 'Utilities', 'Mortgage', 'Others'];
  const colorOptions = ["red","blue","green","orange","pink","yellow","purple","gray"]

  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    if (rows[current.month]) {
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

      const newPieChartData = Object.entries(categoryData).map(([label, value], index) => ({
        id: index,
        value,
        label,
        color: colorOptions[index]
      }));

      setPieChartData(newPieChartData);
    }
  }, [rows, current.month]);

  return (
    <div>
      <Button variant="contained" onClick={() => setVisualize(false)}>
        Back
      </Button>
      {rows[current.month] ? (
        <PieChart colors={colorOptions} series={[{ data: pieChartData }]} width={700} height={400} />
      ) : (
        <Typography>No data</Typography>
      )}
    </div>
  );
};

export default ExpenseChart;
