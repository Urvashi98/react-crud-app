import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import ShowUserTableData from "./ShowUserTableData";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: "50%",
    margin: "auto",
  },
  thead: {
    fontSize: "20px",
    color: "#3f51b5",
    fontWeight: "700",
  },
});

export default function ShowUserTable(props) {
  const { books, isLoading, onDelete, onEdit } = props;
  const classes = useStyles();

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.thead}>Book Name</TableCell>
                <TableCell className={classes.thead}>Author</TableCell>
                <TableCell align="center" className={classes.thead}>
                  Operations
                </TableCell>
              </TableRow>
            </TableHead>
            <ShowUserTableData
              books={books}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </Table>
        </TableContainer>
      )}
    </>
  );
}
