import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 140,
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
    marginBottom: '-1em',
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
}));

export default function RecipeReviewCard({ data, data: { attributes } }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  /*
    Here I used Link, but alternatively there are 
    other ways such as Onlick then redirect it with 
    props.history.push 
  */

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link
          to={{ pathname: `/view/${data.id}`, state: attributes }}
          className={classes.linkCustom}
        >
          <CardMedia
            className={classes.media}
            // image='https://i.gadgets360cdn.com/large/switch_1476973763118.jpeg?output-quality=80&output-format=webp'
            image='image/Mask_Group_1.png'
            title='Paella dish'
          />
          <CardHeader
            title={
              attributes.title.indexOf('+') > 0
                ? attributes.title.split('+')[0]
                : attributes.title
            }
            // subheader={attributes.condition}
          />
          <CardActions className={classes.price}>
            {attributes.price}
          </CardActions>
        </Link>
        <CardActions disableSpacing>
          {/* <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton> */}
          <IconButton
            id='customCollapse'
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>{attributes.description}</Typography>
            <CardActions disableSpacing>
              <LocationOnIcon /> {attributes.location}
            </CardActions>
            <CardActions disableSpacing>
              <LocationOnIcon /> {attributes.phone}
            </CardActions>
          </CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
  );
}
