import logo from './logo.svg';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ActionPane from './ActionPane';


function App() {
  return (
    <div className=" mt-5">
     <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} >
          <ActionPane />
        </Box>

      </Container>
    </React.Fragment>
    </div>
  );
}

export default App;
