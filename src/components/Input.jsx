import React from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import FormControl from '@mui/material/FormControl';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Input = () => {
        const categoryOptions = ["Travel","Food","Entertainment"]
  return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{p:1, height:"75px",backgroundColor:"#004aad",textAlign:"center",color:"black",display:"flex",flexDirection:"row", justifyContent: 'space-around',alignItems:"center"}}>
        {/* <TextField className='customInputField' id="filled-basic" label="Date" variant="filled" color='primary'/> */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker className='customInputField' />
    </LocalizationProvider>
        <FormControl>
        <ToggleButtonGroup className='customInputField' color="primary"  exclusive  aria-label="Platform">
      <ToggleButton value="in">Cash In</ToggleButton>
      <ToggleButton value="out">Cash Out</ToggleButton>
    </ToggleButtonGroup>
    </FormControl >
        <Autocomplete className='customInputField' disablePortal id="clear-on-escape" clearOnEscape options={categoryOptions} sx={{ width: 200}} renderInput={(params) => <TextField {...params} label="Category" variant='filled' />}/>
        <TextField className='customInputField'  id="filled-basic" label="Amount" variant="filled" />
        <TextField className='customInputField' id="filled-basic" label="Description" variant="filled" sx={{ width: 300 }} />
            <Button variant='contained' color='success' sx={{height:40}}>Track</Button>
        </AppBar>
      </Box>
  )
}

export default Input