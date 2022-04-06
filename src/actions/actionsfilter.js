
import { LANDING_SUCCESS, LAUNCH_SUCCESS, YEAR_FILTER } from "../actionTypes/actionTypes";

const launchSuccess = (value) => ({
  type: LAUNCH_SUCCESS,
  value
});

const landingSuccess = (value) => ({
  type: LANDING_SUCCESS,
  value
});

const yearFilter = (value) => ({
  type: YEAR_FILTER,
  value
});

export default {
  launchSuccess,
  landingSuccess,
  yearFilter
}