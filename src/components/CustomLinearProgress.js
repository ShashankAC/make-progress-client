import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState } from 'react';

function CustomLinearProgress(props) {
 
  const [styles, setStyles] = useState({});
  
  useEffect(() => {
    if (props.status === 'Done') {
      setStyles({
        backgroundColor: '#a5e6b6',
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'green'
        }
      });
    } else if (props.status === 'Incomplete') {
      setStyles({
        backgroundColor: '#f09475',
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'red'
        }
      });
    }
  }, [props.status])

  return (
    <LinearProgress
      variant={props.variant}
      value={props.value}
      sx={styles}
    />
  )
}

export default CustomLinearProgress;