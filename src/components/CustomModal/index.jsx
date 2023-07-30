import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Backdrop, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '10px'
};

const StyledResponsiveBox = styled(Box)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
@media (max-width: 415px) {
  width: 90%;
}
width: 30%;
background-color: white;
border: 2px solid #000;
box-shadow: 24;
border-radius: 10px;
`;

export default function CustomModal(props) {

  return (
    <div>
      <Backdrop
        open={props.openModal}
      >
        <Modal
          open={props.openModal}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledResponsiveBox>
            <Box
              display="flex"
              justifyContent="space-between"
              bgcolor="#242464"
            >
              <Typography
                sx={{
                  padding: '10px',
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
              <Button onClick={props.handleClose}><CloseIcon /></Button>
            </Box>
            {props.body}
          </StyledResponsiveBox>
        </Modal>
      </Backdrop>
    </div>
  );
}

CustomModal.propTypes = {
  openModal: PropTypes.bool,
  onClose: PropTypes.func,
  heading: PropTypes.string,
  body: PropTypes.node,
}
