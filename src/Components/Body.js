import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LeftBody from './LeftBody';


export default function Body() {
    return (
    <div className='body'>
      <Container maxWidth="false" styled={{padding:0}} className='body-container'>
      <Grid container>
        <Grid xs={2}  className="body-left-grid">
            <LeftBody className="left-body"></LeftBody>
        </Grid>
        <Grid xs={10} className="body-right">
        </Grid>
        </Grid>
      </Container>
    </div>

    );
}



