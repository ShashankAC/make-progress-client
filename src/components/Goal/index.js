import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box  from '@mui/material/Box';
import { red } from '@mui/material/colors';
import LinearProgress from '@mui/material/LinearProgress';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import SubGoal from '../SubGoal/SubGoal';
import { Menu, MenuItem } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Goal(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  }


  return (
    <Card 
      sx={{
        maxWidth: 320,
        minWidth: 320,
        margin: '5px',
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.priority[0]}
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
              open={open}
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
              <MenuItem onClick={handleMenuClose}><Link to={`/goalDetails/${props.goalId}`}><Button>Details</Button></Link></MenuItem>
              <MenuItem onClick={handleMenuClose}><Button>Delete</Button></MenuItem>
              <MenuItem onClick={handleMenuClose}><Button>Hold</Button></MenuItem>
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
        <Typography>Progress {props.progress}%</Typography>
        <LinearProgress variant="determinate" value={props.progress} />
      </Box>
      {props.image &&
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardMedia
            component="img"
            height="194"
            image={props.image}
            alt="Goal image"
          />
        </Collapse>
      }
      <CardContent sx={{ paddingBottom: '0px', minHeight: '56.03px' }}>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '0px' }} paragraph>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ mt: "auto", paddingBottom: '0px' }}>
        <Link to={`/goalDetails/${props.goalId}`}><Button onClick={handleExpandClick}>Details</Button></Link>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ paddingTop: '0px', paddingBottom: '5px' }}>
          {props.subGoals.map((subGoal) => (
            <SubGoal
              key={subGoal.subGoalId}
              title={subGoal.title}
              description={subGoal.description}
              progress={subGoal.progress}
              status={subGoal.status}
              category={subGoal.category}
              startDate={subGoal.startDate}
            />
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}