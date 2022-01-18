import "./HealthRegion.css";

/**
 *
 * @param {*} props => { pathData }
 * component takes in a SVG path data string and renders a health region
 */
export default function HealthRegion(props) {
  return <path d={props.pathData} />;
}
