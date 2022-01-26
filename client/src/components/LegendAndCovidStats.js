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

export default function LegendAndCovidStats(props) {
  const { restriction } = props;
  const classes = useStyles();
  return (
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
                <CircleIcon className={classes.stageone} /> Stage 1, it is
                completely closed check the restrictions below.
              </p>
            </Item>
            <Item>
              <p>
                <CircleIcon className={classes.stagetwo} /> This region is in
                Stage 2, caution stage check where there are restrictions.
              </p>
            </Item>
            <Item>
              <p>
                <CircleIcon className={classes.stagethree} /> This region is in
                Stage 3, this area is open.
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
                Health Region: {JSON.stringify(restriction.stats.health_region)}
              </p>
            </Item>
            <Item>
              <p>Province {JSON.stringify(restriction.stats.province)}</p>
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
              <p>Current Deaths: {JSON.stringify(restriction.stats.deaths)}</p>
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
  );
}
