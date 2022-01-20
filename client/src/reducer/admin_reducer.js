export const SET_DATA = "SET_DATA";

const adminReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        stages: action.stages,
        healthRegions: action.healthRegions,
        loading: false,
        error: null
      };
    
    default:
      return state;
  }
};

export default adminReducer;