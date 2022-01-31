export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const GET_JOBS = "GET_JOBS";

export const addToFavoAction = (comp) => ({
  type: ADD_TO_FAV,
  payload: comp,
});
export const removeFromFavoAction = (index) => ({
  type: REMOVE_FROM_FAV,
  payload: index,
});

export const getJobsAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10"
      );
      if (response.ok) {
        const res = await response.json();
        const job = res.data;
        console.log(job);
        // setPosition(job);
        dispatch({
          type: GET_JOBS,
          payload: job,
        });
      } else {
        console.log("Something went wrong while fetching the data");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
