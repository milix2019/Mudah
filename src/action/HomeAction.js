import axios from 'axios';
import { GET_LIST, GET_VIEW, GET_SIMILAR } from './ActionConstant';
import config from '../../config';

/*
    This Section is for getting all the data with our axios
*/
function list_data(data) {
  return {
    type: GET_LIST,
    payload: data,
  };
}

function view_data(data) {
  return {
    type: GET_VIEW,
    payload: data,
  };
}

function similar_data(data) {
  return {
    type: GET_SIMILAR,
    payload: data,
  };
}

export const fetch_list_data = () => async (dispatch) => {
  try {
    const res = await axios.get(config.BASE_URL + 'list');
    dispatch(list_data(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const fetch_view_data = (id) => async (dispatch) => {
  try {
    const res = await axios.get(config.BASE_URL + `view/${id}`);
    dispatch(view_data(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const fetch_similar_data = (id) => async (dispatch) => {
  try {
    const res = await axios.get(config.BASE_URL + `similar/${id}`);
    dispatch(similar_data(res.data));
  } catch (err) {
    console.log(err);
  }
};
