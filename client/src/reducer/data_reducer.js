export const SET_USERS = "SET_USERS";
export const SET_DATA = "SET_DATA";

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        stage: action.users,
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
