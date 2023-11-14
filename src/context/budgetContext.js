import React, { createContext } from "react";

export const BudgetDataContext = createContext(null)

const BudgetContext = ({children}) => {
        let data = {
                userName:"Agnes Lily",
                rows: [
                        { id: 101, date: "2 January", type: "in", category: "Income", amount: 5000, description: "Salary Credited" },
                        { id: 102, date: "10 January", type: "out", category: "Rent", amount: 200, description: "House rent and EB" },
                        { id: 103, date: "15 January", type: "out", category: "Groceries", amount: 50, description: "Weekly grocery shopping" },
                        { id: 104, date: "20 January", type: "in", category: "Bonus", amount: 1000, description: "Year-end bonus" },
                        { id: 105, date: "25 January", type: "out", category: "Dining", amount: 75, description: "Dinner with friends" },
                      ],
                cols : [
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
                          valueGetter: (params) =>
                            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
                        },
                      ]
        }
        return (
                <BudgetDataContext.Provider value={data}>{children}</BudgetDataContext.Provider>
        )
}
export default BudgetContext