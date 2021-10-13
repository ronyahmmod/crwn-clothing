import { createSelector } from 'reselect';

const selectState = (state) => state;

export const selectDirectory = createSelector(
  [selectState],
  (state) => state.directory
);
