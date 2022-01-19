export const SET_STAGE_COLOR = "SET_STAGE_COLOR";
export const SET_DATA = "SET_DATA";

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_STAGE_COLOR:
      return {
        ...state,
        stageObj: action.stageObj,
        loading: false,
      };
    case SET_DATA:
      return {
        ...state,
        mapData: action.mapData,
        loading: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
