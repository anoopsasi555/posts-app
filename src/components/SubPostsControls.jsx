//This component contains posts buttons(next and prev) displayed in the Home page

import React from "react";

import {Button} from '@mui/material'

const SubPostsControls = ({start, setStart, length}) => {
    const prevHandler = () => {
        setStart(start-3)
    }
    const nextHandler = () => {
        setStart(start+3)
    }
  return (
    <>
      <div style={{display:'flex', justifyContent: 'center'}}>
        <Button disabled={start < 3 ? true : false} onClick={prevHandler} >
          Prev
        </Button>&nbsp;
        <Button disabled={start>length-3} onClick={nextHandler} >
          Next
        </Button>
      </div>
    </>
  );
};

export default SubPostsControls;
