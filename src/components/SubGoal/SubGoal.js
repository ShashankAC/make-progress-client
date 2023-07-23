import { Box, LinearProgress, Typography } from '@mui/material';
import * as React from 'react';


function SubGoal(props) {

  return (
    <Box>
        <Box margin="5px">
        <Typography>{props.title}</Typography>
        <Typography>Progress {props.progress}%</Typography>
        <LinearProgress variant="determinate" value={props.progress} />
      </Box>
    </Box>
  )
}

export default SubGoal;