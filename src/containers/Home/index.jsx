import React from "react";
import dayjs from 'dayjs';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, MenuItem, FormControl, Collapse } from "@mui/material";
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
        description: 'Build an application end-to-end from scratch and deploy it for personal use.',
        priority: 1,
        startDate: 'May 2 2023',
        endDate: 'May 2 2025',
        progress: 15,
        status: 'In progress',
        image: 'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_1280.jpg',
        subGoals: [
          {
            subGoalId: 1,
            title: 'Frontend React JS',
            progress: 5,
            status: 'In progress',
          },
          {
            subGoalId: 2,
            title: 'Postgresql database design',
            progress: 5,
            status: 'In progress',
          },
          {
            subGoalId: 3,
            title: 'Backend Node Express',
            progress: 15,
            status: 'In progress',
          },
          {
            subGoalId: 4,
            title: 'AWS',
            progress: 1,
            status: 'In progress',
          }
        ]
      },
      {
        goalId: 2,
        title: 'Learn Springboot framework',
        category: 'Hard',
        description: 'Learn Java Springboot to become a backend web-developer',
        priority: 2,
        startDate: 'Jul 16 2023',
        endDate: 'Jul 16 2024',
        progress: 5,
        status: 'In progress',
        subGoals: [
          {
            subGoalId: 5,
            title: 'Learn Java 17',
            progress: 5,
            status: 'In progress',
          },
          {
            subGoalId: 6, 
            title: 'Learn Java Spring concepts.',
            progress: 15,
            status: 'Not started',
          },
          {
            subGoalId: 7,
            title: 'Build a Springboot backend server for the goal management app.',
            progress: 25,
            status: 'Not started',
          },
        ]
      },
      {
        goalId: 3,
        title: 'Read books',
        category: 'Easy',
        description: 'Add 5 books at a time and start reading them one by one',
        priority: 3,
        startDate: 'Jul 30 2023',
        endDate: 'Jul 30 2024',
        progress: 5,
        status: 'In progress',
        subGoals: [
          {
            subGoalId: 8,
            title: 'The Undiscovered Self',
            progress: 100,
            status: 'Done'
          },
          {
            subGoalId: 9,
            title: 'The Stranger',
            progress: 100,
            status: 'Done'
          },
          {
            subGoalId: 10,
            title: 'Essays and Aphorisms',
            progress: 50,
            status: 'In progress',
          },
          {
            subGoalId: 11,
            title: 'Psychology of Self Deception',
            progress: 0,
            status: 'Not started',
          },
          {
            subGoalId: 12,
            title: 'The Meditations',
            progress: 0,
            status: 'Not started',
          },
          {
            subGoalId: 13,
            title: 'The Brothers Karamazov',
            progress: 0,
            status: 'Not started',
          },
          {
            subGoalId: 14,
            title: 'Epictetus',
            progress: 0,
            status: 'Not started',
          },
          {
            subGoalId: 15,
            title: 'Letters from a Stoic',
            progress: 0,
            status: 'Not started',
          },
          {
            subGoalId: 16,
            title: 'The Origin of Species',
            progress: 0,
            status: 'Not started',
          },
        ]
      },
      {
        goalId: 4,
        title: 'Build an autonomous wheeled robot',
        category: 'Hard',
        description: 'Build an autonomous wheeled robot using Aruduino UNO R3, L293D motor shield, IR and Ultrasound sensors and 3v DC motors.',
        priority: 3,
        startDate: 'May 22 2023',
        endDate: 'May 22 2024',
        progress: 5,
        status: 'In progress',
        subGoals: [
          {
            subGoalId: 17,
            title: 'Figure out IR sensor programming.',
            progress: 0,
            status: 'In progress'
          },
          {
            subGoalId: 18,
            title: 'Figure out IR sensor integration with Arduino and motor shield.',
            progress: 0,
            status: 'Not started'
          },
          {
            subGoalId: 19,
            title: 'Revision of Ultrasound sensor programming.',
            progress: 0,
            status: 'Not started'
          },
          {
            subGoalId: 20,
            title: 'Figure out of Ultrasound sensor integration with Arduino and motor-shield.',
            progress: 0,
            status: 'Not started'
          },
          {
            subGoalId: 21,
            title: 'Figure out how to control the DC motors with Arduino and motor-shield.',
            progress: 0,
            status: 'Not started'
          },
          {
            subGoalId: 22,
            title: 'Figure out of to control the DC motors with Arduino and motor-shield using sensor feedback.',
            progress: 0,
            status: 'Not started'
          },
          {
            subGoalId: 23,
            title: 'Explore the feasiblity of integrating remote control.',
            progress: 0,
            status: 'Not started'
          },
        ],
      },
      {
        goalId: 5,
        title: 'Build a 4 legged robot.',
        category: 'Hard',
        description: 'Build a 4 legged robot.',
        priority: 3,
        startDate: '',
        endDate: '',
        progress: 5,
        status: 'Just thinking about it',
        subGoals: []
      }
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
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" margin="10px">Set a new goal</Typography>
      <FormControl>
        <Box
          display="flex"
          width="90%"
          alignItems="start"
          sx={{
            '& .MuiTextField-root': { width: '90%' },
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
              label="Describe your goal"
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
              {['Not started', 'In progress', 'Done', 'On hold', 'Cancelled'].map((ele) => (
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
          <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
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
            <Typography variant="h5" paragraph gutterBottom>
              If your goals don't scare you, they are not big enough.
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
              {...goal}
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