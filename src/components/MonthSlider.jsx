import React,{useContext} from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from "@mui/material/Button"
import Typography from '@mui/material/Typography';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { BudgetDataContext } from '../context/budgetContext.js'

const MonthSlider = ({setVisualize}) => {
        const {currentMonth,setCurrentMonth} = useContext(BudgetDataContext)
        const goToPreviousMonth = () => {
                setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1));
        };

        const goToNextMonth = () => {
                setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1));
        };

        return (
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ p: 1, backgroundColor: "#e6c2bf", height: "55px", textAlign: "center", color: "black", display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                <Button variant="text" onClick={goToPreviousMonth}><ArrowCircleLeftOutlinedIcon sx={{ fontSize: 40 }} /></Button>
                <Box component="div" sx={{ fontWeight: "bold", display: 'flex', alignItems: 'center' }}>
  <Typography variant="h6" sx={{ p: 1 }}>
    {new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentMonth)}
  </Typography>
  <Button variant='contained' onClick={() => setVisualize(true)}>Visualize</Button>
</Box>

                <Button variant="text" onClick={goToNextMonth}><ArrowCircleRightOutlinedIcon sx={{ fontSize: 40 }} /></Button>
                </AppBar>
                </Box>
        );
        };

        export default MonthSlider;
