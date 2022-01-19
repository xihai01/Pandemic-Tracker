export const SET_STAGE = "SET_STAGE";
export const SET_REGION = "SET_REGION";

const adminReducer = (state, action) => {
  switch (action.type) {
    case SET_STAGE:
      return {
        ...state,
        stage: action.stage,
        loading: false,
      };
    case SET_REGION:
      return {
        ...state,
        health_regions: action.health_regions,
        loading: false,
      };
    default:
      return state;
  }
};

export default adminReducer;