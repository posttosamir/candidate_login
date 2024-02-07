import { ROUTE_CONSTANTS } from "../constants";
import {
  AddCandidate,
  CandidateDetails,
  Candidates,
  Login,
  NotFound,
} from "../page";

const { ADD_CANDIDATE, CANDIDATE_DETAILS, CANDIDATES, LOGIN, NOT_FOUND } =
  ROUTE_CONSTANTS;

export const PROTECTED_ROUTE_CONFIG = () => {
  return [
    {
      path: CANDIDATES,
      component: Candidates,
    },
    {
      path: ADD_CANDIDATE,
      component: AddCandidate,
    },
    {
      path: CANDIDATE_DETAILS,
      component: CandidateDetails,
    },
    {
      path: NOT_FOUND,
      component: NotFound,
    },
  ];
};

export const PUBLIC_ROUTE_CONFIG = () => {
  return [
    {
      path: LOGIN,
      component: Login,
    },
    {
      path: NOT_FOUND,
      component: NotFound,
    },
  ];
};
