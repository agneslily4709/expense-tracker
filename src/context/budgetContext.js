import React, { createContext, useState } from "react";

export const BudgetDataContext = createContext(null)

const expenseRows = [
        { id: 101, date: "2-01-2023", type: true, category: "Income", amount: 5000, description: "Salary Credited" },
        { id: 102, date: "10-01-2023", type: false, category: "Rent", amount: 200, description: "House rent and EB" },
        { id: 103, date: "15-01-2023", type: false, category: "Groceries", amount: 50, description: "Weekly grocery shopping" },
        { id: 104, date: "20-01-2023", type: true, category: "Bonus", amount: 1000, description: "Year-end bonus" },
        { id: 105, date: "25-01-2023", type: false, category: "Dining", amount: 75, description: "Dinner with friends" }
      ]
const expenseCols = [
{ field: 'id', headerName: 'ID', width: 70 },
{ field: 'firstName', headerName: 'First name', width: 130 },
{ field: 'lastName', headerName: 'Last name', width: 130 },
{
field: 'age',
headerName: 'Age',
type: 'number',
width: 90,
},
{
field: 'fullName',
headerName: 'Full name',
description: 'This column has a value getter and is not sortable.',
sortable: false,
width: 160,
}
]

const BudgetContext = ({children}) => {
        const [rows, setRows] = useState(expenseRows);
        const [editData, setEditData] = useState(null);
        const data = {
                userName:"Agnes Lily",
                rows: rows,
                cols : expenseCols,
                setRows:setRows,
                editData:editData,
                setEditData:setEditData
        }

        return (
                <BudgetDataContext.Provider value={data}>{children}</BudgetDataContext.Provider>
        )
}
export default BudgetContext