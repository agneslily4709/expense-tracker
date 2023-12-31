import React, { useState,useContext, useEffect } from 'react'
import { BudgetDataContext } from '../context/budgetContext.js'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Input = () => {
        const {rows,setRows,setEditData,editData,current} = useContext(BudgetDataContext)

        const categoryOptions = ["Income","Travel","Food","Entertainment","Bonus","Utilities","Mortage","Others"]
        const [data,setData] =  useState({id:"",date:"",type:true,category:"",amount:"",description:"",})

        const handleChange = (e) => {
                setData({...data,[e.target.name]: e.target.value})
        }

        const handleSubmit = (e) => {
                e.preventDefault();
                data.id = parseInt(Date.now() * Math.random());
              
                setRows((prevRows) => {
                  const updatedRows = { ...prevRows };
                if (editData) {
                    const existingIndex = updatedRows[current.month].findIndex(item => item.id === editData.id);
                    if (existingIndex !== -1)  updatedRows[current.month][existingIndex] = data;
                  } 
                else {
                    if (current.month in updatedRows) updatedRows[current.month] = [...updatedRows[current.month], data];
                   else updatedRows[current.month] = [data];
                  }
                  return updatedRows;
                });
                setEditData(null);
                setData({id:"",date:"",type:true,category:"",amount:"",description:"",});
              };
              
        
  useEffect(() => {
        if (editData) {
          setData(editData);
        }
      }, [editData]);
  return (
        <Box sx={{ flexGrow: 1}} component="form" noValidate>
        <AppBar position="static" sx={{p:1, height:"75px",backgroundColor:"#004aad",textAlign:"center",color:"black",display:"flex",flexDirection:"row", justifyContent: 'space-around',alignItems:"center"}}>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DatePicker format={`DD-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${current.year}`} defaultValue={dayjs("2023-01-01")} 
 className='customInputField' name='date' onChange={(newValue) =>{
        setData({...data,date:`${newValue.$D}-${newValue.$M+1}-${newValue.$y}`})
      }}/>
    </LocalizationProvider>
    <FormControlLabel className='customInputField' control={<Switch color="error" size="large" checked={data.type} onChange={() => setData({ ...data, type: !data.type })} />} sx={{ width: 150 }} label={`Cash ${data.type ? 'In' : 'Out'}`} />
    <Autocomplete
  className='customInputField'
  disablePortal
  id="clear-on-escape"
  clearOnEscape
  value={data.category}
  options={categoryOptions}
  getOptionSelected={(option, value) => option === value} // or adjust based on your data structure
  onChange={(event, newValue) => handleChange(newValue)}
  sx={{ width: 200 }}
  renderInput={(params) => <TextField {...params} name='category' label="Category" variant='filled' />}
/>

        <TextField className='customInputField'  id="filled-basic" label="Amount" variant="filled" name='amount' value={data.amount} onChange={handleChange}/>
        <TextField className='customInputField' id="filled-basic" label="Description" variant="filled" name='description' value={data.description} onChange={handleChange} sx={{ width: 300 }} />
            <Button variant='contained' color='success' sx={{height:40}} type='submit' onClick={handleSubmit}>{editData ? 'Update' : 'Track'}</Button>
        </AppBar>
      </Box>
  )
}

export default Input