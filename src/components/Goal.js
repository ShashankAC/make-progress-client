import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box  from '@mui/material/Box';
import { red } from '@mui/material/colors';
import { Menu, MenuItem, Button, FormControl, Collapse, TextField, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import SubGoal from './SubGoal';
import CustomModal from './CustomModal';
import CustomDatePicker from './Datepicker';
import CustomLinearProgress from './CustomLinearProgress';
import * as Constants from '../utils/constants';

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
  const [openSubGoalModal, setOpenSubgoalModal] = React.useState(false);
  const [startDate, setStartDate] = React.useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleNewSubgoal = () => {
    setOpenSubgoalModal(!openSubGoalModal);
  }

  const handleSubGoalChange = (e) => {
    e.preventDefault();
  }

  const submitSubgoal = (e) => {
    e.preventDefault();
  }

  const subGoalBody = (
    <Box>
      <FormControl>
        <Box
          display="flex"
          flexDirection="column"
          margin="10px"
        >
          <TextField
            id="goalTitle"
            name="title"
            label="Goal name"
            variant="outlined"
            type="text"
            sx={{ mb: 3 }}
            onChange={handleSubGoalChange}
          />
          <TextField
            id="goalDescription"
            name="description"
            label="Describe your goal"
            variant="outlined"
            type="text"
            multiline
            sx={{ mb: 3 }}
            maxRows={2}
            onChange={handleSubGoalChange}
          />
          <TextField
            id="goalCategory"
            name="category"
            label="Category"
            variant="outlined"
            select
            sx={{ mb: 3 }}
            onChange={handleSubGoalChange}
          >
            {[Constants.CATEGORY_SERIOUS, Constants.CATEGORY_EXPERIMENTAL, Constants.CATEGORY_HOBBY].map((ele) => (
              <MenuItem key={ele} value={ele}>{ele}</MenuItem>
            ))}
          </TextField>
          <TextField
            id="goalStatus"
            name="status"
            label="Status"
            variant="outlined"
            select
            sx={{ mb: 3 }}
            onChange={handleSubGoalChange}
          >
            {[Constants.STATUS_NOT_STARTED, Constants.STATUS_IN_PROGRESS, Constants.STATUS_DONE, Constants.STATUS_ON_HOLD].map((ele) => (
              <MenuItem key={ele} value={ele}>{ele}</MenuItem>
            ))}
          </TextField>
          <CustomDatePicker
            value={startDate}
            label="Start date"
            handleDateChange={handleSubGoalChange}
            sx={{ width: '100%' }}
          />
        </Box>
      </FormControl>
      <Box
          display="flex"
          justifyContent="space-evenly"
          padding="10px"
          borderTop="2px solid #242464"
          width="100%"
        >
          <Button
            variant="contained"
            sx={{ bgcolor: '#242464' }}
            onClick={submitSubgoal}
          >
            Add Subgoal
          </Button>
          <Button
            variant="outlined"
            onClick={handleNewSubgoal}
          >
            Cancel
          </Button>
      </Box>
    </Box>
  );

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
              <MenuItem
                onClick={handleMenuClose}
              >
                <Link
                  to={`/goalDetails/${props.goalId}`}
                >
                  <Button>
                    Edit Goal
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={handleNewSubgoal}
              >
                <Button>
                  Add Subgoal
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
              >
                <Button>
                  Delete Goal
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
        <Typography>{props.status} {props.progress} {props.progressText}</Typography>
        <CustomLinearProgress
          variant="determinate"
          value={props.progress}
          status={props.status}
        />
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
      <CardActions disableSpacing sx={{ mt: "auto", paddingBottom: '0px' }}>
        <Button onClick={handleExpandClick}>Subgoals</Button>
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
              {...subGoal}
            />
          ))}
          <Button
            sx={{
              height: 'fit-content',
              marginTop: '5px',
              marginBottom: 'auto',
              padding: '5px',
              width: '150px',
              background: '#242464',
            }}
            variant="contained"
            onClick={handleNewSubgoal}
          >Add Subgoal</Button>
        </CardContent>
      </Collapse>
      {openSubGoalModal &&
        <CustomModal
          heading="Add Subgoal"
          openModal={openSubGoalModal}
          handleClose={handleNewSubgoal}
          body={subGoalBody}
        />
      }
    </Card>
  );
}