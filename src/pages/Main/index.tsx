import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';

import { SearchCity } from '../SearchCity';
import { Collections } from '../Collections';
import { useStyles } from './useStyles';

export const Main: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container direction="column">
        <Grid item className={classes.Links}>
          <Typography>
            <Link to="home">Home</Link>
          </Typography>
          <Typography>
            <Link to="collections">Collections</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Routes>
            <Route path="/*">
              <Route path="home" element={<SearchCity />} />
              <Route path="collections" element={<Collections />} />
            </Route>
          </Routes>
        </Grid>
      </Grid>
    </Container>
  );
};
