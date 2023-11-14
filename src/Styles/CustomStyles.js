import { grey, yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: yellow[200], 
          color:grey,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 16,
        },
      }));