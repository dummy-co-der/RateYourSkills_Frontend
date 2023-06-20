import { SKILL_REQUEST, SKILL_SUCCESS, SKILL_FAIL } from "../constant/Skill";

export const skills = (state = { skills: [] }, action) => {
  switch (action.type) {
    case SKILL_REQUEST:
      return { loading: true };
    case SKILL_SUCCESS:
      return { loading: false, skills: action.payload };
    case SKILL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
