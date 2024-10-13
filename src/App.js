import './App.css';
import Button from '@mui/material/Button';
//import AcUnitIcon from '@mui/icons-material/AcUnit';
import {AcUnit, Accessibility} from '@mui/icons-material';
import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import { blue, green, red } from '@mui/material/colors';

//import AccessibilityIcon from '@mui/icons-material/Accessibility';

function App() {
  return (
    <div>
     <Button size="large" variant='text'>Hello World</Button>
     <Button startIcon={<AcUnit />} fullWidth size="large" variant='contained'>Hello World</Button>
     <Button endIcon={<Accessibility />} variant='outlined'>Hello World</Button>
     <Button sx={{
      backgroundColor: 'gray',
      color: 'white',
      margin: 10,
      "&:hover": {
        backgroundColor: 'black'
      },
      "&:disabled": {
        backgroundColor: 'white',
        color: 'black'
      }
     }}>Custom Style</Button>
     <CustomButton>Custom Button Style</CustomButton>
     <Typography variant='h1' gutterBottom >h1. Heading</Typography>

     <Button color="secondary">
       Theme Button
     </Button>
     <CustomThemeButton>Custom Theme Button</CustomThemeButton>
    </div>
  );
}

const CustomThemeButton = styled(Button) (({theme}) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  margin: 10,
  "&:hover": {
    backgroundColor: 'black'
  },
  "&:disabled": {
    backgroundColor: 'white',
    color: 'black'
  }
}))

const CustomButton = styled(Button) ({
  backgroundColor: 'gray',
  color: 'white',
  margin: 10,
  "&:hover": {
    backgroundColor: 'black'
  },
  "&:disabled": {
    backgroundColor: 'white',
    color: 'black'
  }
})

export default App;
