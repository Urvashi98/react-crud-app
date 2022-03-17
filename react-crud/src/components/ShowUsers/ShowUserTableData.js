import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      width: '50%',
      margin: 'auto'
    },
    icons: {
      margin: '5px',
    },
    thead: {
      fontSize: '20px',
      color: '#3f51b5',
      fontWeight: '700'
    }
  });

function ShowUserTableData(props) {
    const {books} = props;
    const classes = useStyles();

  return (
      <TableBody>

        {books?.map((book) => (
            <TableRow key={book.id}>
            <TableCell component="th" scope="row">
              {book.bookName}
            </TableCell>
            <TableCell>{book.bookAuthor}</TableCell>
            <TableCell align="center">
              <Edit className={classes.icons}/>
              <Delete className={classes.icons}/>
            </TableCell>
            {/* Add a new component below to include edit and delete buttons */}
            {/* <TableCell align="right">{row.carbs}</TableCell> 
            <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
        ))}

      </TableBody>
   
  )
}

export default ShowUserTableData;


