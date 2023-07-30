import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, LinearProgress, Typography, Button, Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SubGoal(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleSubgoalMenuClick = (e) => {
    e.preventDefault();
  }

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  return (
    <Box margin="5px" paddingBottom="5px">
      <Box display="flex" justifyContent="space-between">
        <Typography component="p" gutterBottom sx={{ fontWeight:"700", textAlign: "left" }}>{props.title}</Typography>
        <IconButton onClick={handleMenuClick}><MoreVertIcon /></IconButton>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={openMenu}
            onClick={handleMenuClose}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem
              onClick={handleMenuClose}
            >
              <Link
                to={`/goalDetails/${props.subGoalId}`}
              >
                <Button>
                  Edit Subgoal
                </Button>
              </Link>
            </MenuItem>
            <MenuItem
              onClick={handleSubgoalMenuClick}
            >
              <Button>
                Add Task
              </Button>
            </MenuItem>
            <MenuItem
              onClick={handleSubgoalMenuClick}
            >
              <Button>
                View Tasks
              </Button>
            </MenuItem>
            <MenuItem
              onClick={handleSubgoalMenuClick}
            >
              <Button>
                Delete
              </Button>
            </MenuItem>
          </Menu>
      </Box>
      <Typography>{props.status} {props.progress}%</Typography>
      <LinearProgress variant="determinate" value={props.progress} />
    </Box>
  )
}

export default SubGoal;
//<Button sx={{ textTransform: 'capitalized' }} variant="outlined">Update</Button>