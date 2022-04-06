import { LANDING_SUCCESS, LAUNCH_SUCCESS, YEAR_FILTER } from "../actionTypes/actionTypes";


const initialState = {
  yearFilter: false,
  launchSuccess: null,
  landingSuccess: null
};

const reducersFulter = (state = initialState, action) => {
  switch(action.type) {
    case LAUNCH_SUCCESS:
      return { ...state, launchSuccess: Boolean(action.value) }
    case LANDING_SUCCESS:
      return { ...state, landingSuccess: Boolean(action.value) }
    case YEAR_FILTER:
      return { ...state, yearFilter: Boolean(action.value) }
    default:
      return state;
  }
}

export default reducersFulter;