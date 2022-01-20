import "./HealthRegion.css";
import axios from "axios";
import classNames from "classnames";

const handleClick = function (setRestriction, phuID) {
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

/**
 *
 * @param {*} props => { pathData }
 * component takes in a SVG path data string and renders a health region
 */
export default function HealthRegion(props) {
  const { setRestriction, phuID } = props;
  // render health region with a fill color depending on stage #
  const pathClass = classNames("path", {
    "path--stage_one": props.stageID === 1,
    "path--stage_two": props.stageID === 2,
    "path--stage_three": props.stageID === 3,
  });
  return (
    <path
      className={pathClass}
      onClick={() => {
        handleClick(setRestriction, phuID);
      }}
      d={props.pathData}
    />
  );
}
