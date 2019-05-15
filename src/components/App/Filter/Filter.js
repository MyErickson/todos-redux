/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';
import { setFilter, visibilityFilters } from '../../../store/actions';

const Filter = ({ setFilter}) => (
    <>
      <button className="btn btn-primary mr-2" onClick={() => setFilter(visibilityFilters.SHOW_ALL)}> Tout </button>
      <button className="btn btn-primary mr-2" onClick={() => setFilter(visibilityFilters.SHOW_DONE)}> Fini </button>
      <button className="btn btn-primary" onClick={() => setFilter(visibilityFilters.SHOW_ACTIVE)}> En cours </button>
    </>
);

// export default connect(null, dispatch => ({
//   setFilterConnect: (filter) => {
//     dispatch(setFilter(filter));
//   },
// }))(Filter);


//version 2
// const Filter = ({ dispatch }) => (
//   <>
//     <button className="btn btn-primary mr-2" onClick={() => dispatch(setFilter(visibilityFilters.SHOW_ALL))}> Tout </button>
//     <button className="btn btn-primary mr-2" onClick={() => dispatch(setFilter(visibilityFilters.SHOW_DONE))}> Fini </button>
//     <button className="btn btn-primary" onClick={() => dispatch(setFilter(visibilityFilters.SHOW_ACTIVE))}> En cours </button>
//   </>
// );

// export default connect()(Filter);


//version 3

export default connect(null, { setFilter })(Filter);
