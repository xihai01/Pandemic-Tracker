import "./HealthRegion.css";
import classNames from "classnames";

const handleClick = function (phuID) {
  console.log(phuID);
};

/**
 *
 * @param {*} props => { pathData }
 * component takes in a SVG path data string and renders a health region
 */
export default function HealthRegion(props) {
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
        handleClick(props.phuID);
      }}
      d={props.pathData}
    />
  );
}
