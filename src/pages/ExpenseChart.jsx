import React, { useContext } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {BudgetDataContext} from "../context/budgetContext"
import {Box, Button} from "@mui/material"
const ExpenseChart = ({ setVisualize }) => {
        const {rows,current} = useContext(BudgetDataContext)
        const categoryData = rows[current.month].reduce((acc, expense) => {
                if (expense.type === false) {
                  const category = expense.category;
                  acc[category] = (acc[category] || 0) + expense.amount;
                }
                return acc;
              }, {});

              const pieChartData = Object.entries(categoryData).map(([label, value], index) => ({
                id: index,
                value,
                label,
              }));
  return (
    <div>
        <Button variant='contained' onClick={()=>setVisualize(false)}> Back </Button>
 <PieChart
      series={[{ data: pieChartData }]}
      width={700}
      height={400}
    />
    <Box></Box>
    </div>
  );
};

export default ExpenseChart;
