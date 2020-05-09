import React, { Fragment, useEffect, useState } from 'react';
import Spinner from './Spinner/Spinner';
import PropTypes from 'prop-types';
import List from './List';

const Home = ({ fetch_list_data, list: { list, loading_list } }) => {
  useEffect(() => {
    fetch_list_data();
  }, [fetch_list_data]);

  return loading_list ? <Spinner /> : <List data={list} />;
};

Home.propTypes = {
  fetch_list_data: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};

export default Home;
