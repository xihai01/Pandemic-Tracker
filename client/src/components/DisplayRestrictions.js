import * as React from "react";
import { Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import DeckIcon from "@mui/icons-material/Deck";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ChurchIcon from "@mui/icons-material/Church";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import AttractionsIcon from "@mui/icons-material/Attractions";
import WcIcon from "@mui/icons-material/Wc";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MasksIcon from "@mui/icons-material/Masks";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles((theme) => ({
  cards: {
    backgroundColor: "#829ab1",
    borderRight: " 15px solid #829ab1",
    padding: "10px",
    marginBottom: "50px",
    alignItems: "stretch",
  },
  title: {
    color: "#ba000d",
  },
}));
/**
 *
 * @param {*} status
 * Display covid restrictions and stats or a loading skeleton if data is still being fetched
 */
export const DisplayRestrictions = function (props) {
  const { status, restriction } = props;
  const classes = useStyles();
  if (!status && Object.keys(restriction).length !== 0) {
    console.log(restriction);
    return (
      <>
        <Container sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={4} className={classes.cards}>
              <Item>
                <LocationOnIcon />
                <h3 className={classes.title}>Region Name</h3>
                <p>{restriction.restrictions.region_name}</p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item>
                <HomeIcon />
                <h3 className={classes.title}>Max Indoor Gathering</h3>
                <p>{restriction.restrictions.max_indoor_gathering} people</p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item>
                <DeckIcon />
                <h3 className={classes.title}>Max Outdoor Gathering</h3>
                <p>{restriction.restrictions.max_outdoor_gathering} people</p>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4} className={classes.cards}>
              <Item>
                <RestaurantMenuIcon />
                <h3 className={classes.title}>Resturants</h3>
                <p>{restriction.restrictions.food_establishments}</p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item>
                <AddShoppingCartIcon />
                <h3 className={classes.title}>Retail</h3>
                <p>{restriction.restrictions.retail}</p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item>
                <ChurchIcon />
                <h3 className={classes.title}>Ceremony</h3>
                <p>{restriction.restrictions.ceremony}</p>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4} className={classes.cards}>
              <Item>
                <AttractionsIcon />
                <h3>
                  <h3 className={classes.title}>Entertainment</h3>
                </h3>
                <p>{restriction.restrictions.entertainment}</p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item>
                <DownhillSkiingIcon />
                <h3 className={classes.title}>Sports & Recreation</h3>
                <p>{restriction.restrictions.sports_recreational}</p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item>
                <WcIcon />
                <h3 className={classes.title}>Personal Care</h3>
                <p> {restriction.restrictions.personal_care}</p>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  } else if (Object.keys(restriction).length !== 0) {
    return (
      <>
        <Skeleton width={500} />
        <Skeleton width={500} />
        <Skeleton width={500} />
      </>
    );
  }
  return <span></span>;
};
// {/* /**
//  *
//  * @param {*} status
//  * Display covid restrictions and stats or a loading skeleton if data is still being fetched
//  */
// export const DisplayRestrictions = function (props) {
//   const { status, restriction } = props;
//   if (!status && Object.keys(restriction).length !== 0) {
//     console.log(restriction);
//     return (
//       <> */}
//         <div className="info-box">
//           <div className="rowForRestriction">
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img className="imageForCard" src="images/test.jpeg" alt="Region Name" />
//                 <h3>Region Name</h3>
//                 <p>{JSON.stringify(restriction.restrictions.region_name)}</p>
//               </div>
//             </div>
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Max Indoor Gathering:</h3>
//                 <p>
//                   {JSON.stringify(
//                     restriction.restrictions.max_indoor_gathering
//                   )}{" "}
//                   people
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="rowForRestriction">
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Max Outdoor Gathering:</h3>
//                 <p>
//                   {JSON.stringify(
//                     restriction.restrictions.max_outdoor_gathering
//                   )}{" "}
//                   people
//                 </p>
//               </div>
//             </div>
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Retail:</h3>
//                 <p>{JSON.stringify(restriction.restrictions.retail)}</p>
//               </div>
//             </div>
//           </div>

//           <div className="rowForRestriction">
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Ceremony:</h3>
//                 <p>{JSON.stringify(restriction.restrictions.ceremony)}</p>
//               </div>
//             </div>
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Sports & Recreation:</h3>
//                 <p>
//                   {" "}
//                   {JSON.stringify(restriction.restrictions.sports_recreational)}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="rowForRestriction">
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Entertainment: </h3>
//                 <p>{JSON.stringify(restriction.restrictions.entertainment)}</p>
//               </div>
//             </div>
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Personal Care:</h3>
//                 <p> {JSON.stringify(restriction.restrictions.personal_care)}</p>
//               </div>
//             </div>
//           </div>

//           <div className="singleRestrictionCard">
//             <img src="" alt="Region Name" />
//             <div className="containerForRestriction">
//               <h4>
//                 <b> Covid Statistics: </b>
//               </h4>
//               <p>{JSON.stringify(restriction.stats)}</p>
//             </div>
//           </div>
//         </div>
