import React, { useState } from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Input = () => {
        const categoryOptions = ["Travel","Food","Entertainment"]
        const [data,setData] =  useState({date:"",type:true,category:"",amount:"",description:""})
        const handleChange = (e) => {
                console.log(e.target.value)
                setData({...data,[e.target.name]: e.target.value})
        }
        const handleSubmit = (e) => {
                e.preventDefault()
                console.log(data)
        }
  return (
        <Box sx={{ flexGrow: 1}} component="form" noValidate>
        <AppBar position="static" sx={{p:1, height:"75px",backgroundColor:"#004aad",textAlign:"center",color:"black",display:"flex",flexDirection:"row", justifyContent: 'space-around',alignItems:"center"}}>
        <LocalizationProvider dateAdapter={AdapterDateFns} >
      <DatePicker inputFormat="DD-MM-YYYY" className='customInputField' name='date' value={data.date} />
    </LocalizationProvider>
          <FormControlLabel className='customInputField' control={<Switch color="error" defaultChecked size="large"onChange={() => setData({ ...data, type: !data.type })} />} sx={{width:150}} label={`Cash ${data.type? 'In':'Out'}`}/>
        <Autocomplete className='customInputField' disablePortal id="clear-on-escape" clearOnEscape options={categoryOptions} onSelect={handleChange} sx={{ width: 200}} renderInput={(params) => <TextField {...params}  name='category' label="Category" variant='filled' />}/>
        <TextField className='customInputField'  id="filled-basic" label="Amount" variant="filled" name='amount' onChange={handleChange}/>
        <TextField className='customInputField' id="filled-basic" label="Description" variant="filled" name='description' onChange={handleChange} sx={{ width: 300 }} />
            <Button variant='contained' color='success' sx={{height:40}} type='submit' onClick={handleSubmit}>Track</Button>
        </AppBar>
      </Box>
  )
}

export default Input