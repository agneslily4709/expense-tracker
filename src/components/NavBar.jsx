import React from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';


const NavBar = () => {
  return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{p:2,backgroundColor:"#004aad",textAlign:"center"}}>
            <Typography variant="h4" color="inherit" component="div">
                Expense Tracker
            </Typography>
        </AppBar>
      </Box>
  )
}

export default NavBar