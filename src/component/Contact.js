import React from 'react';
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
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Forum';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 325,
    // minWidth: 325,
    padding: '20px',
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
    fontSize: '20px',
    font: 'Bold 14px/16px Roboto',
    letterSpacing: ' 0',
    color: '#E01A1A',
    opacity: 1,
  },
  label: {
    color: '#707070',
    margin: '0 0 -5px 10px',
    fontSize: '12px',
  },
  text: {
    letterSpacing: ' 0',
    color: '#333333',
    opacity: 1,
    marginLeft: '2px',
    fontSize: '14px',
  },
  seller: {
    color: '#E01A1A',
    background: ' #FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E01A1A',
    borderRadius: '5px',
    opacity: 1,
    margin: ' 9px',
    padding: '4px 16px',
  },
  phone: {
    color: '#E01A1A',
    padding: '3px',
    letterSpacing: 0,
    opacity: 1,
    margin: '1px 10px',
    fontWeight: '500',
    fontSize: '16px',
  },
  chat: {
    color: '#FFFF',
  },
  chatLabel: {
    color: '#FFFF',
    padding: '3px',
    letterSpacing: 0,
    opacity: 1,
    margin: '1px 10px',
    fontWeight: '500',
    fontSize: '16px',
  },
  chatContainer: {
    backgroundColor: '#E01A1A',
    color: '#E01A1A',
    background: ' #FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E01A1A',
    borderRadius: '5px',
    opacity: 1,
    margin: ' 9px',
    padding: '4px 16px',
  },
  contactIcon: {
    fontSize: '14px',
    paddingLeft: '3px',
  },
}));

export default function RecipeReviewCard({ data }) {
  const {
    condition,
    location,
    phone,
    price,
    seller_name,
    seller_type,
    title,
  } = data;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} id='contactContainer'>
      <IconButton aria-label='add to favorites'>
        <FavoriteBorderIcon />
        <p className={classes.contactIcon}>Wishlist</p>
      </IconButton>
      <IconButton aria-label='share'>
        <ShareIcon />
        <p className={classes.contactIcon}>Share</p>
      </IconButton>
      <Typography className={classes.label} color='textSecondary'>
        Price
      </Typography>
      <CardActions className={classes.price}>{price}</CardActions>
      <br />
      <Typography className={classes.label} color='textSecondary'>
        Item condition
      </Typography>
      <CardActions className={classes.text}>{condition}</CardActions>
      <br />
      <Typography className={classes.label} color='textSecondary'>
        Item location
      </Typography>
      <CardActions className={classes.text}>{location}</CardActions>

      <br />
      <Typography className={classes.label} color='textSecondary'>
        Seller Info
      </Typography>

      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={seller_name}
        subheader={seller_type}
      />

      <Divider id='contactDivider' />
      <br />
      <div id='contactCustom'>
        <Typography
          id='contactText'
          className={classes.label}
          color='textSecondary'
        >
          Interested with the ad? Contact the seller
        </Typography>
        <div className={classes.seller}>
          <Badge color='secondary' badgeContent={0}>
            <PhoneIcon color='secondary' />{' '}
            <span className={classes.phone}>{phone}</span>
          </Badge>
        </div>
        <div className={classes.seller}>
          <Badge color='secondary' badgeContent={0}>
            <MailIcon color='secondary' />{' '}
            <span className={classes.phone}>Email</span>
          </Badge>
        </div>
        <div className={classes.chatContainer}>
          <Badge color='secondary' badgeContent={0}>
            <ChatIcon className={classes.chat} />{' '}
            <span className={classes.chatLabel}>Chat</span>
          </Badge>
        </div>
      </div>
    </Card>
  );
}
