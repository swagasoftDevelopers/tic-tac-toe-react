import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ActionBox from './ActionBox';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const boxTracker = {0:null, 1:null, 2:null, 3:null, 4:null, 5:null, 6:null, 7:null, 8:null, 9:null};
  let counter = 0;




function ActionPane() {
    const [currentPlayer, setCurrentPlayer] = React.useState(1);
    const [isGameOver, setIsGameOver] = React.useState({winner:'', gameOver: false});
    const [boxStyle, setBoxStyle] = React.useState({0:'', 1:'',2:'',3:'',4:'',5:'', 6:'',7:'', 8:''});



    const onActionBoxClick = (i) => {
        if(boxTracker[i] != null){
            return null;
        }

        if(currentPlayer === 1){
            setCurrentPlayer(2);
            boxTracker[i] = 'X';
            counter += 1;
            resultManager();
            return 'X';
        }else{
            setCurrentPlayer(1);
            boxTracker[i] = 'O';
            counter += 1;
            resultManager();
            return 'O';

        }
    }


    const resultManager = ()=> {
        if(boxTracker[0] === 'X' && boxTracker[1] === 'X' && boxTracker[2] === 'X' ){
            setBoxStyle(prev => {
                return {...prev, 0:'bg-success text-white', 1:'bg-success text-white',2:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player One wins', gameOver: true});
        }

        if(boxTracker[0] === 'O' && boxTracker[1] === 'O' && boxTracker[2] === 'O' ){
            setBoxStyle(prev => {
                return {...prev, 0:'bg-success text-white', 1:'bg-success text-white',2:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player Two wins', gameOver: true});
        }
        
        //  second
        if(boxTracker[3] === 'X' && boxTracker[4] === 'X' && boxTracker[5] === 'X' ){
            setBoxStyle(prev => {
                return {...prev, 3:'bg-success text-white', 4:'bg-success text-white',5:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player One wins', gameOver: true});
        }

        if(boxTracker[3] === 'O' && boxTracker[4] === 'O' && boxTracker[5] === 'O' ){
            setBoxStyle(prev => {
                return {...prev, 3:'bg-success text-white', 4:'bg-success text-white',5:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player Two wins', gameOver: true});
        }


        //  third
        if(boxTracker[6] === 'X' && boxTracker[7] === 'X' && boxTracker[8] === 'X' ){
            setBoxStyle(prev => {
                return {...prev, 6:'bg-success text-white', 7:'bg-success text-white',8:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player One wins', gameOver: true});
        }

        if(boxTracker[6] === 'O' && boxTracker[7] === 'O' && boxTracker[8] === 'O' ){
            setBoxStyle(prev => {
                return {...prev, 6:'bg-success text-white', 7:'bg-success text-white',8:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player Two wins', gameOver: true});
        }

        //  4th
        if(boxTracker[0] === 'X' && boxTracker[3] === 'X' && boxTracker[6] === 'X' ){
            setBoxStyle(prev => {
                return {...prev, 0:'bg-success text-white', 3:'bg-success text-white',6:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player One wins', gameOver: true});
        }

        if(boxTracker[0] === 'O' && boxTracker[3] === 'O' && boxTracker[6] === 'O' ){
            setBoxStyle(prev => {
                return {...prev, 0:'bg-success text-white', 3:'bg-success text-white',6:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player Two wins', gameOver: true});
        }

        //  5th
        if(boxTracker[1] === 'X' && boxTracker[4] === 'X' && boxTracker[7] === 'X' ){
            setBoxStyle(prev => {
                return {...prev, 1:'bg-success text-white', 4:'bg-success text-white', 7:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player One wins', gameOver: true});
        }

        if(boxTracker[1] === 'O' && boxTracker[4] === 'O' && boxTracker[7] === 'O' ){
            setBoxStyle(prev => {
                return {...prev, 1:'bg-success text-white', 4:'bg-success text-white',7:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player Two wins', gameOver: true});
        }
        //  6th
        if(boxTracker[2] === 'X' && boxTracker[5] === 'X' && boxTracker[8] === 'X' ){
            setBoxStyle(prev => {
                return {...prev, 2:'bg-success text-white', 5:'bg-success text-white', 8:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player One wins', gameOver: true});
        }

        if(boxTracker[2] === 'O' && boxTracker[5] === 'O' && boxTracker[8] === 'O' ){
            setBoxStyle(prev => {
                return {...prev, 2:'bg-success text-white', 5:'bg-success text-white',8:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player Two wins', gameOver: true});
        }
        //  7th
        if(boxTracker[0] === 'X' && boxTracker[4] === 'X' && boxTracker[8] === 'X' ){
            setBoxStyle(prev => {
                return {...prev, 0:'bg-success text-white', 4:'bg-success text-white', 8:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player One wins', gameOver: true});
        }

        if(boxTracker[0] === 'O' && boxTracker[4] === 'O' && boxTracker[8] === 'O' ){
            setBoxStyle(prev => {
                return {...prev, 0:'bg-success text-white', 4:'bg-success text-white',8:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player Two wins', gameOver: true});
        }
        //  8th
        if(boxTracker[6] === 'X' && boxTracker[4] === 'X' && boxTracker[2] === 'X' ){
            setBoxStyle(prev => {
                return {...prev, 6:'bg-success text-white', 4:'bg-success text-white', 2:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player One wins', gameOver: true});
        }

        if(boxTracker[6] === 'O' && boxTracker[4] === 'O' && boxTracker[2] === 'O' ){
            setBoxStyle(prev => {
                return {...prev, 6:'bg-success text-white', 4:'bg-success text-white',2:'bg-success text-white'}
            });
            setIsGameOver({winner:' Player Two wins', gameOver: true});
        }

        if(counter === 9){
            setIsGameOver({winner:' DRAW GAME ', gameOver: true});
        }
    }


    const restartGame = ()=> {
        window.location.reload();
    }


    const displayActionBox = () => {
        let display = [];
        for (let i = 0; i <  9; i++) {
            display.push( <ActionBox onActionBoxClick={onActionBoxClick} isGameOver={isGameOver} 
                style={boxStyle[i]} key={i} index={i} />  );
        }

        return display;
    }

    return ( 
        <>

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
    
    {displayActionBox()}
      </Grid>
      <div className='card mt-3 bg-light text-primary' >
        <h6>Next Player - {currentPlayer} </h6>
      </div>
      <div className='text-center mt-5 mb-4 font--weight-bold' >
        <button onClick={()=> restartGame()}  className='btn btn-lg btn-danger' > RESTART </button>
           
      </div>
      <div className='text-center bg-light font--weight-bold' >
            <h1>{isGameOver.winner}</h1>
      </div>
    </Box>
        </>
     );
}

export default ActionPane;