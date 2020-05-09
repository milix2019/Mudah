import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Breadcrumb = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} id='Breadcrumb'>
      <Breadcrumbs separator='›' aria-label='breadcrumb'>
        <Link color='inherit' href='/' onClick={handleClick}>
          Home
        </Link>
        <Link
          color='inherit'
          href='/getting-started/installation/'
          onClick={handleClick}
        >
          Electronics
        </Link>
        <Link
          color='inherit'
          href='/getting-started/installation/'
          onClick={handleClick}
        >
          Game & Console
        </Link>
        <Typography color='textPrimary'>{title}</Typography>
      </Breadcrumbs>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Breadcrumb;
