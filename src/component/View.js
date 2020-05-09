import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetch_view_data } from '../action/index';
import { connect } from 'react-redux';
import Contact from './Contact';
import Similar from './Similar';
import Breadcrumb from './Breadcrumb';
import Spinner from './Spinner/Spinner';
// Material UI stuff
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import Flag from '@material-ui/icons/Flag';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  image: {
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #B9B9B9',
    opacity: 1,
    width: '100%',
  },
  description: {
    letterSpacing: 0,
    color: '#E01A1A',
    opacity: 1,
    textDecoration: 'underline',
    fontSize: '16px',
    fontWeight: 'bold',
    flexGrow: 1,
    marginTop: '13px',
  },
  similarItem: {
    color: '#707070',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
    flexGrow: 1,
  },
  reportAd: {
    fontSize: '14px',
  },
  header: {
    margin: '3px 0',
  },
  paddingHeader: {
    paddingLeft: '3px',
    color: '#333333',
    fontSize: '20px',
    fontWeight: '500',
  },
  paddingView: {
    paddingLeft: '1em',
  },
  imgCard: {
    display: 'flex!important',
    marginRight: '1em',
  },
}));

const View = ({ view, props, fetch_view_data, match }) => {
  const [dataView, setView] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    /*
     We are checking if the data is coming from parents,
     If no, then we call an api to bring the data
    */
    //Scroll up when enter to the page
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    if (props.location.state !== undefined) {
      setView(props.location.state);
    } else {
      if (match.params.id !== undefined) {
        setView([]);
        fetch_view_data(match.params.id);
      }
    }
  }, [fetch_view_data, match.params.id, props.location.state]);

  return (
    <Grid container spacing={1} className={classes.paddingView}>
      <Grid className={classes.paddingHeader}>
        <Breadcrumb
          title={
            dataView.title !== undefined
              ? dataView.title
              : view.view.data
              ? view.view.data.attributes.title
              : ''
          }
        />
        <p className={classes.header}>
          {dataView.title !== undefined
            ? dataView.title
            : view.view.data
            ? view.view.data.attributes.title
            : ''}
        </p>
      </Grid>
      <div id='customHeader'>
        <Card id='imgCard' className={classes.imgCard}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='Contemplative Reptile'
              // height='568'
              image='https://thegoodguys.sirv.com/products/50061168/50061168_577051.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90'
              title='Contemplative Reptile'
            />
          </CardActionArea>
        </Card>
        <Contact
          data={
            dataView.length > 0 || dataView.length == undefined
              ? dataView
              : view.view.data
              ? view.view.data.attributes
              : ''
          }
        />
      </div>
      <Grid item lg={7} md={12}>
        <div style={{ display: 'flex' }}>
          <div className={classes.description}>DESCRIPTION</div>

          <IconButton className={classes.reportAd} aria-label='Report Ad'>
            <Flag /> Report Ad
          </IconButton>
        </div>
        <div>
          <Typography paragraph>
            {dataView.description !== undefined
              ? dataView.description
              : view.view.data
              ? view.view.data.attributes.description
              : ''}
          </Typography>
          <Divider />
        </div>
      </Grid>
      <Grid container>
        <div className={classes.similarItem}>SIMILAR ITEMS</div>
      </Grid>
      <Grid container>
        <Similar id={match.params.id} />
      </Grid>
    </Grid>
  );
};

View.propTypes = {
  view: PropTypes.object,
  fetch_view_data: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  view: state.list,
  props: ownProps,
});

export default connect(mapStateToProps, { fetch_view_data })(View);
