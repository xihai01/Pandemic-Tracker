import axios from "axios";
import { GET_REGION } from "misc/phuToregion";

export const handleClick = function (setRestriction, phuID) {
  // get restrictions and key covid stats data from api
  Promise.all([
    axios.get(`/api/restrictions/${phuID}`),
    axios.get(`https://api.opencovid.ca/summary?loc=${GET_REGION[phuID]}`),
  ])
    .then(([restrictions, stats]) => {
      setRestriction({
        restrictions: restrictions.data,
        stats: stats.data.summary[0],
      });
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};
