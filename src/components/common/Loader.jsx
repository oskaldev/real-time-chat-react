import { Container, Grid } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justifyContent={'center'}>
        <Grid container alignItems={'center'} direction={'column'}>
          <div className='lds-dual-ring'></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
