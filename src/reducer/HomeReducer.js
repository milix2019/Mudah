import { GET_LIST, GET_VIEW, GET_SIMILAR } from '../action/ActionConstant';

/*
    Defining the initiate State to use in our components
*/

const initate_state = {
  loading_list: true,
  list: [],
  view: [],
  similar: [],
};

export default function (state = initate_state, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST:
      return Object.assign({}, state, {
        ...state,
        loading_list: false,
        list: payload,
      });
    case GET_VIEW:
      return Object.assign({}, state, {
        ...state,
        loading_list: false,
        view: payload,
      });
    case GET_SIMILAR:
      return Object.assign({}, state, {
        ...state,
        loading_list: false,
        similar: payload,
      });
    default:
      return state;
  }
}
