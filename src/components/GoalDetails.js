import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from '../containers/Login/queries';

function GoalDetails() {
  const { data } = useQuery(IS_LOGGED_IN);
  console.log(data.isLoggedIn, data.email, data.name);

  const goalDetails = {
    title: 'Goal title',
    description: 'Goal description goes here.',
    progress: '25',
    status: 'In Progress',
    image: 'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_1280.jpg',
    category: 'Hard',
    startDate: '10th Aug 2023',
    endDate: '30th Sept 2023',
    priority: '1',
    subGoals: [
      {
        subGoalId: 1,
        title: 'Frontend React JS',
        description: 'Build the frontend using react.js',
        progress: 5,
        status: 'In Progress',
        category: 'Easy',
        startDate: '07/07/2023',
        activities: [
          {
            title: 'task 1',
            timeSpent: '1 hr',
            status: 'In progress',
          },
          {
            title: 'task 2',
            timeSpent: '1 hr',
            status: 'In progress',
          },
          {
            title: 'task 3',
            timeSpent: '1 hr',
            status: 'In progress',
          },
        ]
      },
      {
        subGoalId: 2,
        title: 'Backend Node Express',
        description: 'Build the backend using node.js express and postgresQL database',
        progress: 15,
        status: 'In Progress',
        category: 'Moderate',
        startDate: '01/07/2023',
        activities: [
          {
            title: 'task 1',
            timeSpent: '1 hr',
            status: 'In progress',
          },
          {
            title: 'task 2',
            timeSpent: '1 hr',
            status: 'In progress',
          },
          {
            title: 'task 3',
            timeSpent: '1 hr',
            status: 'In progress',
          },
        ]
      },
      {
        subGoalId: 3,
        title: 'AWS',
        description: 'Learn AWS and deploy the project',
        progress: 25,
        status: 'Not started',
        category: 'Unknown',
        startDate: '14/07/2023',
        activities: [
          {
            title: 'task 1',
            timeSpent: '1 hr',
            status: 'Not started',
          },
          {
            title: 'task 2',
            timeSpent: '1 hr',
            status: 'Started',
          },
          {
            title: 'task 3',
            timeSpent: '1 hr',
            status: 'In progress',
          },
          {
            title: 'task 4',
            timeSpent: '1 hr',
            status: 'On hold',
          },
          {
            title: 'task 5',
            timeSpent: '1 hr',
            status: 'Completed',
          },
          {
            title: 'task 5',
            timeSpent: '1 hr',
            status: 'Cancelled',
          },
        ]
      }
    ]
  };
  
  return (
    <Box>
        <Typography>{goalDetails.title}</Typography>
    </Box>
  )
}

export default GoalDetails;