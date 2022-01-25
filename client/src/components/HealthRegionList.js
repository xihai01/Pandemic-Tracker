import { useState } from "react";
import HealthRegion from "./HealthRegion";
import { setMapProjection } from "helpers/setMapProjection";
import { DisplayRestrictions } from "./DisplayRestrictions";
import * as d3 from "d3";
import { CircularProgress } from "@material-ui/core";
import useMapTools from "hooks/useMapTools";
import Navbar from "./Navbar";
import { Button } from "@material-ui/core";
import { Container } from "@mui/material";
import * as React from "react";
// import { Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import MasksIcon from "@mui/icons-material/Masks";
import CircleIcon from "@mui/icons-material/Circle";
import { makeStyles } from "@material-ui/core/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
    fontFamily: "Nunito",
  },

  stageone: {
    color: "#ff0000",
  },
  stagetwo: {
    color: "#FFA500",
  },
  stagethree: {
    color: "#228B22",
  },

  box: {
    display: "flex",
    flexGrow: "1",
  },
  gridItem: {
    alignItems: "center",
    marginleft: "200px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  headtitle: {
    marginLeft: "18px",
    color: "#ba000d",
  },
}));
/**
 *
 * @param {mapData} props
 * This component takes in mapData and renders each health region
 */
export default function HealthRegionList(props) {
  const classes = useStyles();
  // restriction holds restrictions data for health regions
  const [restriction, setRestriction] = useState({});
  const [status, setStatus] = useState(false);
  const { svgLoad, setSvgLoad, mapData, stageObj, loading } = props;
  // render tooltip and geoloc marker
  useMapTools(mapData, loading);
  // wait until mapData is loaded and ready for use
  if (!loading) {
    const path = d3.geoPath().projection(setMapProjection(mapData));

    const healthRegionList = mapData.features.map((data) => {
      // get the stage # and phuID for each health region
      let phuID = data.properties["PHU_ID"];
      let region_name = data.properties["NAME_ENG"];
      let stageID = stageObj[phuID];
      return (
        <HealthRegion
          key={data.properties.FID}
          pathData={path(data)}
          stageID={stageID}
          setRestriction={setRestriction}
          setStatus={setStatus}
          phuID={phuID}
          tooltipData={region_name}
        />
      );
    });
    console.log(loading);

    return (
      <Container maxWidth="2000px" className={classes.root} r>
        <div className="map-page">
          <Navbar />
          <div className={classes.title}>
            <h1 className={classes.headtitle}>Ontario's COVID Restrictions</h1>
            <h3>
              Click on a health region down below to display the restrictions in
              your area.
            </h3>
          </div>
          <div className="mapcontainer">
            <svg className="image">
              <g>{healthRegionList}</g>
            </svg>
            {Object.keys(restriction).length !== 0 && (
              <Box
                sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
                className={classes.box}
              >
                <section className="sidetablemap">
                  <Grid
                    justifyContent="space-evenly"
                    alignItems="center"
                    container
                    spacing={3}
                  >
                    <Grid item xs={4}>
                      <Item>
                        <h3>Legend</h3>
                      </Item>
                      <Item>
                        <p>
                          <CircleIcon className={classes.stageone} /> Stage 1,
                          it is completely closed check the restrictions below.
                        </p>
                      </Item>
                      <Item>
                        <p>
                          <CircleIcon className={classes.stagetwo} /> This
                          region is in Stage 2, caution stage check where there
                          are restrictions.
                        </p>
                      </Item>
                      <Item>
                        <p>
                          <CircleIcon className={classes.stagethree} /> This
                          region is in Stage 3, this area is open.
                        </p>
                      </Item>
                    </Grid>
                    <Grid item xs={4} className={classes.gridItem}>
                      <Item>
                        <h3>
                          Covid Statistics <MasksIcon />{" "}
                        </h3>
                      </Item>
                      <Item>
                        <p>
                          Health Region:{" "}
                          {JSON.stringify(restriction.stats.health_region)}
                        </p>
                      </Item>
                      <Item>
                        <p>
                          Province {JSON.stringify(restriction.stats.province)}
                        </p>
                      </Item>
                      <Item>
                        <p>Cases: {JSON.stringify(restriction.stats.cases)}</p>
                      </Item>
                      <Item>
                        <p>
                          Total Cases:{" "}
                          {JSON.stringify(restriction.stats.culmulative_cases)}
                        </p>
                      </Item>
                      <Item>
                        <p>
                          Current Deaths:{" "}
                          {JSON.stringify(restriction.stats.deaths)}
                        </p>
                      </Item>
                      <Item>
                        <p>
                          Total Deaths:{" "}
                          {JSON.stringify(restriction.stats.culmulative_deaths)}
                        </p>
                      </Item>
                    </Grid>
                  </Grid>
                </section>
              </Box>
            )}
          </div>
          <br />

          <div className="zoom-button">
            <Button
              onClick={() => {
                console.log("hi");
                svgLoad ? setSvgLoad(0) : setSvgLoad(1);
              }}
              variant="contained"
            >
              Zoom In
            </Button>
          </div>
          <br />
          <DisplayRestrictions status={status} restriction={restriction} />
        </div>
      </Container>
    );
  } else {
    return (
      <div className="loading">
        <CircularProgress color="primary" size="250px" />
      </div>
    );
  }
}
