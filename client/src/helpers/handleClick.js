import axios from "axios";

export const handleClick = function (setRestriction, phuID) {
  // get restrictions data from api
  axios
    .get(`http://localhost:3000/api/restrictions/${phuID}`)
    .then((data) => {
      // set state variable to render a container with restriction data
      setRestriction(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};