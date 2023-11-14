import React, { useContext } from 'react'
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

import {StyledTableCell} from "../CustomStyles.js"
const ExpenseTable = () => {
        const {rows,cols} = useContext(BudgetDataContext)

  return (
        <>
         <div style={{ height: 400, width: '100%' }}>
         <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                                <TableRow sx={{border:`2px solid ${grey[900]}`}}>
                                {cols.map((col) => (<StyledTableCell  key={col.field} align='center'  sx={{ fontWeight: "bold",fontSize:20}}> {col.headerName} </StyledTableCell>))}
                                </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                        <TableRow sx={{backgroundColor:`${(row.type === "in" ? green[100] : red[100])}`, border:`2px solid ${grey[900]}`}} key={row.id} >
                        <StyledTableCell align='center'> {row.date} </StyledTableCell>
                        <StyledTableCell  align="center">{row.category}</StyledTableCell>
                        <StyledTableCell align="center">{row.amount}</StyledTableCell>
                        <StyledTableCell align="center">{row.description}</StyledTableCell>
                        <StyledTableCell align="center">
                                <Button variant='contained' color='success'><EditIcon/></Button>
                                <Button variant='contained' color='error'> <DeleteIcon/></Button>
                        </StyledTableCell>
                        </TableRow>
                        ))}
                        </TableBody>
                </Table>
    </TableContainer>
    </div>
        </>    

  )
}

export default ExpenseTable