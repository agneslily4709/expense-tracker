import React from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from "@mui/material/Button"
import Typography from '@mui/material/Typography';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
const MonthSlider = () => {
  return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{p:1,backgroundColor:"#e6c2bf",textAlign:"center",color:"black",display:"flex",flexDirection:"row", justifyContent: 'space-between'}}>
        <Button variant="text"><ArrowCircleLeftOutlinedIcon sx={{ fontSize: 40 }}/></Button>
            <Typography variant="h6" sx={{p:1}}><Box component="span" sx={{ fontWeight: "bold"}}>January - 2023</Box></Typography>
            <Button variant="text"><ArrowCircleRightOutlinedIcon sx={{ fontSize: 40 }}/></Button>
        </AppBar>
      </Box>
  )
}

export default MonthSlider