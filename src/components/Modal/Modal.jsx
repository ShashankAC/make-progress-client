import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: window.innerWidth > 440 ? '30%' : '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '10px'
};

export default function CustomModal(props) {

  return (
    <div>
      <Modal
        open={props.openNewGoalModal}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography
              sx={{
                padding: '5px',
                textAlign: 'center',
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px"
              }}
              bgcolor="#242464"
              variant="h4"
              gutterBottom
              color="white"
            >
              {props.heading}
            </Typography>
          </Box>
          {props.body}
        </Box>
      </Modal>
    </div>
  );
}