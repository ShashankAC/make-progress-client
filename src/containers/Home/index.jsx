import React from "react";
import dayjs from 'dayjs';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, FormGroup, FormControlLabel, MenuItem, FormControl, Checkbox, Collapse } from "@mui/material";
import Goal from "../../components/Goal";
import AttentionContent from "../../components/AttentionContent";
import CustomDatePicker from "../../components/Datepicker/Datepicker";

function Home() {

  const [openNewGoalModal, setOpenNewGoalModal] = React.useState(false);
  const [goalName, setGoalName] = React.useState();
  const [goalDescription, setGoalDescription] = React.useState();
  const [goalCategory, setGoalCategory] = React.useState();
  const [goalPriority, setGoalPriority] = React.useState();
  const [goalStatus, setGoalStatus] = React.useState();
  const [expanded, setExpanded] = React.useState(false);
  const [addSubGoal, setAddSubGoal] = React.useState(false);
  const [startDate, setStartDate] = React.useState(dayjs());
  const [endDate, setEndDate] = React.useState(dayjs()); 
  const handleOpen = () => setOpenNewGoalModal(true);
  const handleClose = () => setExpanded(!expanded);

  const handleSubGoalCheck = (e) => {
    setAddSubGoal(e.target.checked)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const goals = {
    quantity: 2,
    goals: [
      {
        goalId: 1,
        title: 'Build and deploy an goal management app',
        category: 'Very Hard',
        description: 'Build an application end-to-end from scratch and deploy it for use.',
        priority: 1,
        startDate: 'Jul 16 2023',
        endDate: 'Jul 16 2023',
        progress: 15,
        status: 'In progress',
        image: 'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_1280.jpg',
        subGoals: [
          {
            subGoalId: 1,
            title: 'Frontend React JS',
            progress: 5,
          },
          {
            subGoalId: 2,
            title: 'Backend Node Express',
            progress: 15,
          },
          {
            subGoalId: 3,
            title: 'AWS',
            progress: 25,
          }
        ]
      },
      {
        goalId: 2,
        title: 'Learn Springboot framework',
        category: 'Hard',
        description: 'Learn Java Springboot to become a fullstack web-developer',
        priority: 2,
        startDate: 'Jul 16 2023',
        endDate: 'Jul 16 2023',
        progress: 5,
        status: 'In progress',
        subGoals: [
          {
            subGoalId: 4,
            title: 'Learn Java 17',
            progress: 5,
          },
          {
            subGoalId: 5, 
            title: 'Learn Java Spring concepts',
            progress: 15,
          },
          {
            subGoalId: 6,
            title: 'Learn and build a Springboot project',
            progress: 25,
          }
        ]
      },
      {
        goalId: 3,
        title: 'Read books',
        category: 'Easy',
        description: 'Add 5 books at a time and start reading them one by one',
        priority: 3,
        startDate: 'Jul 16 2023',
        endDate: 'Jul 16 2023',
        progress: 5,
        status: 'In progress',
        subGoals: [
          {
            subGoalId: 7,
            title: 'The Undiscovered Self',
            progress: 5,
          },
          {
            subGoalId: 8,
            title: 'The Stranger',
            progress: 15,
          },
          {
            subGoalId: 9,
            title: 'Essays and Aphorisms',
            progress: 25,
          }
        ]
      },
    ]
  }

  const handleSetNewGoal = (e) => {
    e.preventDefault();
    handleOpen();
  }

  const handleGoalChange = (e) => {
    e.preventDefault();
  }

  const handleGoalSubmit = (e) => {
    e.preventDefault();
  }

  const goalSettingBody = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h4" margin="10px">Set a new goal</Typography>
      <FormControl sx={{ width: '100%' }}>
        <Box
          display="flex"
          width="100%"
          alignItems="start"
          sx={{
            '& .MuiTextField-root': { width: '95%' },
            '.MuiFormLabel-root': { ml: 1 },
            '.MuiInputBase-root': {  ml: 1 },
            '@media (max-width: 414px)': {
              flexWrap: 'wrap'
            }
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            sx={{
              '& .MuiTextField-root': { width: '95%' },
              '.MuiFormLabel-root': { ml: 1 },
              '.MuiInputBase-root': {  ml: 1 }
            }}
          >
            <TextField
              id="goalTitle"
              name="title"
              label="Goal name"
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              onChange={handleGoalChange}
            />
            <TextField
              id="goalDescription"
              name="description"
              label="Description"
              variant="outlined"
              type="text"
              multiline
              sx={{ mb: 3 }}
              onChange={handleGoalChange}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            sx={{
              '& .MuiTextField-root': { width: '95%' },
              '.MuiFormLabel-root': { ml: 1 },
              '.MuiInputBase-root': {  ml: 1 }
            }}
          >
            <TextField
              id="goalCategory"
              name="category"
              label="Category"
              variant="outlined"
              select
              sx={{ width: '93.5%', mb: 3 }}
              onChange={handleGoalChange}
            >
              {['Very easy', 'Easy', 'Moderate', 'Hard', 'Very hard'].map((ele) => (
                <MenuItem key={ele} value={ele}>{ele}</MenuItem>
              ))}
            </TextField>
            <TextField
              id="goalPriority"
              name="priority"
              label="Priority"
              variant="outlined"
              select
              sx={{ width: '93.5%', mb: 3 }}
              onChange={handleGoalChange}
            >
              {[
                {value: 1, label: '1 - Highest'},
                {value: 2, label: '2'},
                {value: 3, label: '3'},
                {value: 4, label: '4'},
                {value: 5, label: '5'},
                {value: 6, label: '6'},
                {value: 7, label: '7'},
                {value: 8, label: '8'},
                {value: 9, label: '9'},
                {value: 10, label: '10 - Lowest'}].map((ele) => (
                <MenuItem key={ele} value={ele.value}>{ele.label}</MenuItem>
              ))}
            </TextField>
            <TextField
              id="goalStatus"
              name="status"
              label="Status"
              variant="outlined"
              select
              sx={{ width: '93.5%', mb: 3 }}
              onChange={handleGoalChange}
            >
              {['Yet to start', 'Started', 'In progress', 'Finished', 'On hold'].map((ele) => (
                <MenuItem key={ele} value={ele}>{ele}</MenuItem>
              ))}
            </TextField>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            marginTop="-10px"
            sx={{
              '& .MuiTextField-root': { width: '95%', marginBottom: '17px' },
              '.MuiFormLabel-root': { ml: 1 },
              '.MuiInputBase-root': {  ml: 1 }
            }}
          >
            <CustomDatePicker
              value={startDate}
              label="Start date"
              handleDateChange={handleGoalChange}
            />
            <CustomDatePicker
              value={endDate}
              label="End date"
              handleDateChange={handleGoalChange}
            />
          </Box>
        </Box>
        <Typography variant="p" color="#242464" margin="10px">* It is recommended to add subgoals to large and complex goals.</Typography>
        <FormControlLabel control={<Checkbox onChange={handleSubGoalCheck} checked={addSubGoal} />} label="Add sub-goals" />
      </FormControl>
      <Box
        display="flex"
        justifyContent="space-evenly"
        width="100%"
        alignItems="center"
        margin="10px 0px 10px 0px"
        padding="10px 0px 0px 10px"
      >
        <Button
          onClick={handleGoalSubmit}
          variant="contained"
          padding='5px'
          width='150px'
          >
            Submit
        </Button>
        <Button
          onClick={handleClose}
          variant="outlined"
          padding='5px'
          width='150px'
          >
            Cancel
        </Button>
      </Box>
    </Box>
  )

  return (
    <Box height="100%" marginLeft="5px">
      <Box sx={{ display: 'flex', justifyContent:'space-between', width: '100%' }}>
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
        >
          {goals.goals.length > 0 && <Typography variant="h4" gutterBottom>Your Goals</Typography>}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {goalSettingBody}
          </Collapse>
        </Box>
        {!expanded &&
          <Box
            display="flex"
            sx={{
              '@media (max-width: 414px)': {
                marginRight: '5px'
              },
              marginRight: '20%'
            }}
          >
            {goals.goals.length > 0 && (
              <Button
                sx={{
                  height: 'fit-content',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  padding: '5px',
                  width: '150px',
                  background: '#242464',
                }}
                variant="contained"
                onClick={handleExpandClick}
              >
                New goal
              </Button>
            )}
          </Box>
        }
      </Box>
      {goals.goals.length === 0 &&
        <AttentionContent
          heading="Set your goals"
          body={
            <Typography variant="h5" gutterBottom>
              Don't worry if your goals are big, just take one step at a time!
            </Typography>
            }
          actionButtonText="Set a goal"
          actionButtonOnClick={handleSetNewGoal}
        />
      }
      <Box display="flex" flexWrap="wrap">
        {!expanded && goals.goals.map((goal) => {
          return (
            <Goal
              key={goal.goalId}
              goalId={goal.goalId}
              title={goal.title}
              description={goal.description}
              category={goal.category}
              priority={goal.priority}
              startDate={goal.startDate}
              endDate={goal.endDate}
              progress={goal.progress}
              status={goal.status}
              image={goal.image}
              subGoals={goal.subGoals}
            />
          )
        })}
      </Box>
      <Box>
        {!expanded && goals.goals.length > 0 && <Typography variant="h4" gutterBottom>Your progress this week</Typography>}
      </Box>
    </Box>
  )
}

export default Home;