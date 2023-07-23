import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function AttentionContent(props) {
  return (
    <Box
        sx={{
          width: '60%',
          background: '#97b2e1',
          borderRadius: '10px',
          boxShadow: '5px 10px #ffffff',
          color: 'black',
          margin: '10px'
        }}
      >
        <Box  sx={{width: '100%', borderRadius: '10px' }}>
          <Typography
            sx={{
              WebkitBorderTopLeftRadius: '10px',
              WebkitBorderTopRightRadius: '10px',
              padding: '5px'
            }}
            bgcolor="#242464"
            variant="h4"
            gutterBottom
            color="white"
          >
            {props.heading}
          </Typography>
        </Box>
        <Box sx={{ padding: '10px' }}>
          <Box>{props.body}</Box>
          <Button
            sx={{ background: '#242464', marginTop: '20px' }}
            variant="contained"
            onClick={props.actionButtonOnClick}
          >
            {props.actionButtonText}
          </Button>  
        </Box>
      </Box>
  )
}

export default AttentionContent;