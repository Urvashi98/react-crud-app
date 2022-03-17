import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./addUser.css";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { setBookToList } from "../../services/list";

const useStyles = makeStyles((theme) => ({
  root: {},
  textFeild: {
    padding: "10px",
    width: "30%",
  },
}));


export default function AddUserForm(props) {

  const {onChangeHandler, submitHandler, book} = props;
  const classes = useStyles();

  const onChange = (e) => {
    // const {id, value} = e.target;
    // setData((preState) => ({...preState, [id]:value}))
    onChangeHandler(e);
  }
  const onSubmit = (e) => {
    // e.preventDefault();
    // var id = "id_" + Math.random().toString().slice(10);
    // data.id = id;
    // console.log('DATAA', data);
    // setBookToList(data);
    // setData(initialData);
    submitHandler(e);
  }
  return (
    <div className="container">
      <form className={classes.root} onSubmit={onSubmit} autoComplete="off">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            id="bookName"
            label="Book Name"
            variant="outlined"
            color="primary"
            className={classes.textFeild}
            value={book.bookName}
            onChange={onChange}
          />
          <TextField
            id="bookAuthor"
            label="Book Author"
            variant="outlined"
            color="primary"
            className={classes.textFeild}
            value={book.bookAuthor}
            onChange={onChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </Grid>
      </form>
    </div>
  );
}
