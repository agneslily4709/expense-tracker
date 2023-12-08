import React, { useEffect,useContext } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {BudgetDataContext} from "../context/budgetContext"
import {Button} from "@mui/material"
const ExpenseChart = ({ expenseRows, setVisualize }) => {
        const {rows,cols,setRows,setEditData} = useContext(BudgetDataContext)
        console.log(rows);
        const categoryData = rows.reduce((acc, expense) => {
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
        <Button onClick={()=>setVisualize(false)}>
                Back
        </Button>
 <PieChart
      series={[{ data: pieChartData }]}
      width={400}
      height={200}
    />
    </div>
  );
};

export default ExpenseChart;
