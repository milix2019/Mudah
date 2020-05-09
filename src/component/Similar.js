import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetch_similar_data } from '../action/index';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Spinner from './Spinner/Spinner';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { red } from '@material-ui/core/colors';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 123,
    fontSize: '12px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  price: {
    fontWeight: 'bolder',
    fontSize: '15px',
    font: 'Bold 14px/16px Roboto',
    letterSpacing: ' 0.28px',
    color: '#E01A1A',
    opacity: 1,
    marginLeft: '9px',
  },
  linkCustom: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  margin: {
    // margin: 13,
  },
}));

const Similar = ({ id, view: { similar }, fetch_similar_data }) => {
  useEffect(() => {
    fetch_similar_data(id);
  }, [fetch_similar_data]);

  const classes = useStyles();

  return similar.data === undefined ? (
    <Spinner />
  ) : (
    <Fragment>
      {similar.data.map((item) => (
        <Grid
          id='similarContainer'
          key={item.id}
          item
          // lg={1}
          // md={6}
          // sm={6}
          className={classes.margin}
        >
          <Card className={classes.root} key={item.id}>
            <CardActionArea>
              <Link
                to={{ pathname: `/view/${item.id}` }}
                className={classes.linkCustom}
              >
                <CardMedia
                  className={classes.media}
                  image='https://thegoodguys.sirv.com/products/50061168/50061168_577051.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90'
                  title='Paella dish'
                />
                <CardHeader
                  title={
                    item.attributes.title.indexOf('+') > 0
                      ? item.attributes.title.split('+')[0]
                      : item.attributes.title
                  }
                  // subheader={attributes.condition}
                />
                <CardActions className={classes.price}>
                  {item.attributes.price}
                </CardActions>
              </Link>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Fragment>
  );
};

Similar.propTypes = {
  view: PropTypes.object,
  fetch_similar_data: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  view: state.list,
  props: ownProps,
});

export default connect(mapStateToProps, { fetch_similar_data })(Similar);
