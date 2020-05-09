import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  titleCursor: {
    cursor: 'pointer',
  },
  color: {
    color: '#D90E0E',
    fontWeight: 'bolder',
  },
}));

const goBack = () => {
  window.location.pathname = '/';
};

const DenseAppBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root} data-test='headerComponent'>
      <AppBar position='fixed' color='default'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          ></IconButton>
          <Typography
            onClick={() => {
              goBack();
            }}
            variant='h6'
            color='inherit'
            className={classes.titleCursor}
          >
            <div className={classes.color}>
              Eazy<small className='title-small'>.my</small>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default DenseAppBar;
