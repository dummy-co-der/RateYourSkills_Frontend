import axios from "axios";
import { SKILL_REQUEST, SKILL_FAIL, SKILL_SUCCESS } from "../constant/Skill";

export const listskill = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SKILL_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      header: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/skills/:id", config);
    dispatch({
      type: SKILL_SUCCESS,
      payload: data,
    });
    localStorage.setItem("skill", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SKILL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
