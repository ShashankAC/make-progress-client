
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import Box  from '@mui/material/Box';
import { Menu, MenuItem, Button, FormControl, Collapse, TextField, } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLinearProgress from './CustomLinearProgress';

function Task(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleNewSubgoal = () => {

  } 

  return (
    <Card
      sx={{
        maxWidth: 320,
        minWidth: 320,
        minHeight: "294.04px",
        margin: '5px',
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {"xx"}
          </Avatar>
        }
        action={
          <>
            <IconButton onClick={handleClick} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
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
                  to={`/goalDetails/${props.taskId}`}
                >
                  <Button>
                    Update Task
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
              >
                <Button>
                  Delete Task
                </Button>
              </MenuItem>
            </Menu>
          </>
        }
        title={<Typography sx={{ fontWeight: 'bold' }}>{props.title}</Typography>}
        subheader={
        <>
          <Typography display="block">{`Start date: ${props.startDate}`}</Typography>
          <Typography>{`End date: ${props.endDate}`}</Typography>
        </>
        }
        sx={{ mt: "0px", mb: '0px', minHeight: '100px' }}
      />
      <Box margin="5px">
        <Typography>{props.status} {props.progress}%</Typography>
        <CustomLinearProgress
          variant="determinate"
          value={props.progress}
          status={props.status}
        />
      </Box>
      <CardContent sx={{ paddingBottom: '0px', minHeight: '56.03px' }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            marginBottom: '0px'
          }}
          paragraph
        >
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Task;