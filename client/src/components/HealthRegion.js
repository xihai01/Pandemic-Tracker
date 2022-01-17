/**
 *
 * @param {*} props => { pathData }
 * component takes in a SVG path data string and renders a health region
 */
export default function HealthRegion(props) {
  const style = {
    fill: "blue",
    stroke: "black",
  };
  return <path style={style} d={props.pathData} />;
}
