import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height:100,
    color: theme.palette.text.secondary,
  }));
  

function ActionBox(props) {
    const [value, setValue] =  React.useState('');

    const clickAction = (index)=> {
        const result = props.onActionBoxClick(index);
        if(result && !props.isGameOver.gameOver){
            setValue(result);
        }

    }
    return (
        <>
            <Grid xs={4}>
          <Item onClick={()=> clickAction(props.index) }  index={props.index} 
          className={`show-cursor pt-4 ` + props.style}  > <h1>{value} </h1> {props.index}  </Item>
        </Grid>
 
        
        </>
      );
}

export default ActionBox;