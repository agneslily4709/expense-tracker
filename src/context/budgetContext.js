import React, { createContext, useState } from "react";

export const BudgetDataContext = createContext(null)

const expenseRows = {
        "January":[
                { id: 101, date: "2-01-2023", type: true, category: "Income", amount: 5000, description: "Salary Credited" },
                { id: 102, date: "10-01-2023", type: false, category: "Rent", amount: 2000, description: "House rent and EB" },
                { id: 103, date: "15-01-2023", type: false, category: "Utilities", amount: 150, description: "Weekly grocery shopping" },
                { id: 104, date: "20-01-2023", type: true, category: "Bonus", amount: 1000, description: "Year-end bonus" },
                { id: 105, date: "25-01-2023", type: false, category: "Food", amount: 75, description: "Dinner with friends" }
        ],
        "February":[
                //Generate similarly with the category
               // const categoryOptions = ["Income","Travel","Food","Entertainment","Bonus","Utilities","Mortage","Others"]
                { id: 201, date: "5-02-2023", type: false, category: "Rent", amount: 2000, description: "House rent and EB" },
                { id: 202, date: "12-02-2023", type: false, category: "Food", amount: 100, description: "Groceries for the month" },
                { id: 203, date: "18-02-2023", type: false, category: "Entertainment", amount: 50, description: "Movie night" },
                { id: 204, date: "25-02-2023", type: true, category: "Income", amount: 5500, description: "Salary Credited" },
        ]
}
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
        const [current, setCurrent] = useState(
                {
                        month:new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date()),
                        year:new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(new Date())
                });
        const data = {
                userName:"Agnes Lily",
                rows: rows,
                cols : expenseCols,
                setRows:setRows,
                editData:editData,
                setEditData:setEditData,
                current:current, 
                setCurrent:setCurrent
        }

        return (
                <BudgetDataContext.Provider value={data}>{children}</BudgetDataContext.Provider>
        )
}
export default BudgetContext