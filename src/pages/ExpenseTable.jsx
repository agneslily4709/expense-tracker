import React, { useContext, useEffect, useState } from 'react'
import { BudgetDataContext } from '../context/budgetContext.js'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { green,grey,red } from '@mui/material/colors';

import {StyledTableCell} from "../Styles/CustomStyles.js"
const ExpenseTable = () => {
        const {rows,cols,setRows,setEditData,current} = useContext(BudgetDataContext)
        const [data,setData] = useState(null)

        const handleDelete = (id) => {
                setRows((prevRows) => prevRows.filter((ele) =>ele.id!==id))
        }
        const handleEdit = (id) => {
                const selectedRow = rows.find((row) => row.id === id);
                setEditData(selectedRow);
              };
        useEffect(()=>{
                setData(rows[current.month])
        },[current.month,rows,data])

  return (
        <>
         <Paper sx={{ width: '100%',height:440,overflowY:"scroll"}}>
         <TableContainer sx={{ minHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                                <TableRow sx={{border:`px solid ${grey[900]}`}}>
                                {cols.map((col) => (<StyledTableCell  key={col.field} align='center'  sx={{ fontWeight: "bold",fontSize:20}}> {col.headerName} </StyledTableCell>))}
                                </TableRow>
                        </TableHead>
                        <TableBody>
                                {data && data.map((row,idx) => (
                                        <TableRow sx={{backgroundColor:`${(row.type? green[100] : red[100])}`, border:`2px solid ${grey[900]}`}} key={idx} >
                                        <StyledTableCell align='center'> {row.date} </StyledTableCell>
                                        <StyledTableCell  align="center">{row.category}</StyledTableCell>
                                        <StyledTableCell align="center">{row.amount}</StyledTableCell>
                                        <StyledTableCell align="center">{row.description}</StyledTableCell>
                                        <StyledTableCell align="center">
                                                <Button variant='contained' color='success' onClick={() => handleEdit(row.id)}><EditIcon/></Button>
                                                <Button variant='contained' color='error'onClick={() => handleDelete(row.id)}> <DeleteIcon/></Button>
                                        </StyledTableCell>
                                        </TableRow>
                                        ))}
                        </TableBody>    
                </Table>
    </TableContainer>
    </Paper>
        </>    

  )
}

export default ExpenseTable