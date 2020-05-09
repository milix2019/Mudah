import { createSelector } from 'reselect';

/* 
    I decided to use selectors because the state looks more cleaner,
    i only select the specific state and dispatch it to the Home components,
    calling will be done in homeContainer.js then dispatch to home.js,
    You can define the same flow/function for other states in future 
    and call it in the specific components holder
*/

export const getlist = (state) => state.list;
export const selected_getlist = createSelector(getlist, (data) => data);
