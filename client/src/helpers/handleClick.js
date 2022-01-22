import axios from "axios";

export const handleClick = function (setRestriction, phuID) {
  // get restrictions and key covid stats data from api
  Promise.all([
    axios.get(`/api/restrictions/${phuID}`),
    axios.get("https://api.opencovid.ca/summary?loc=3595"),
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
