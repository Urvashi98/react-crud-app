import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import ShowUserTable from "./ShowUserTable";
export default function ShowUserComponent(props) {
 const {books, isLoading, onDelete, onEdit} = props
  return (
    <Grid
      container
      spacing={0}
      display="flex"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <ShowUserTable books={books} isLoading={isLoading} onDelete={onDelete} onEdit={onEdit}/>
    </Grid>
  );
}
