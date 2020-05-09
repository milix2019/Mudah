import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

const List = ({ data: { data } }) => {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid key={item.id} item xs={6} sm={3} md={2} lg={2}>
          <Card data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

List.propTypes = {
  data: PropTypes.object.isRequired,
};

export default List;
