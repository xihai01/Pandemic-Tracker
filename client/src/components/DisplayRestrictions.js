import { Skeleton } from "@mui/material";

/**
 *
 * @param {*} status
 * Display covid restrictions and stats or a loading skeleton if data is still being fetched
 */
export const DisplayRestrictions = function (props) {
  const { status, restriction } = props;
  if (!status && Object.keys(restriction).length !== 0) {
    console.log(restriction);
    return (
      <>
        <div className="info-box">
          <div className="rowForRestriction">
            <div className="columnForRestriction">
              <div className="cardForRestriction">
                <img className="imageForCard" src="images/test.jpeg" alt="Region Name" />
                <h3>Region Name</h3>
                <p>{JSON.stringify(restriction.restrictions.region_name)}</p>
              </div>
            </div>
            <div className="columnForRestriction">
              <div className="cardForRestriction">
                <img src="" alt="Region Name" />
                <h3>Max Indoor Gathering:</h3>
                <p>
                  {JSON.stringify(
                    restriction.restrictions.max_indoor_gathering
                  )}{" "}
                  people
                </p>
              </div>
            </div>
          </div>

          <div className="rowForRestriction">
            <div className="columnForRestriction">
              <div className="cardForRestriction">
                <img src="" alt="Region Name" />
                <h3>Max Outdoor Gathering:</h3>
                <p>
                  {JSON.stringify(
                    restriction.restrictions.max_outdoor_gathering
                  )}{" "}
                  people
                </p>
              </div>
            </div>
            <div className="columnForRestriction">
              <div className="cardForRestriction">
                <img src="" alt="Region Name" />
                <h3>Retail:</h3>
                <p>{JSON.stringify(restriction.restrictions.retail)}</p>
              </div>
            </div>
          </div>

          <div className="rowForRestriction">
            <div className="columnForRestriction">
              <div className="cardForRestriction">
                <img src="" alt="Region Name" />
                <h3>Ceremony:</h3>
                <p>{JSON.stringify(restriction.restrictions.ceremony)}</p>
              </div>
            </div>
            <div className="columnForRestriction">
              <div className="cardForRestriction">
                <img src="" alt="Region Name" />
                <h3>Sports & Recreation:</h3>
                <p>
                  {" "}
                  {JSON.stringify(restriction.restrictions.sports_recreational)}
                </p>
              </div>
            </div>
          </div>

          <div className="rowForRestriction">
            <div className="columnForRestriction">
              <div className="cardForRestriction">
                <img src="" alt="Region Name" />
                <h3>Entertainment: </h3>
                <p>{JSON.stringify(restriction.restrictions.entertainment)}</p>
              </div>
            </div>
            <div className="columnForRestriction">
              <div className="cardForRestriction">
                <img src="" alt="Region Name" />
                <h3>Personal Care:</h3>
                <p> {JSON.stringify(restriction.restrictions.personal_care)}</p>
              </div>
            </div>
          </div>

          <div className="singleRestrictionCard">
            <img src="" alt="Region Name" />
            <div className="containerForRestriction">
              <h4>
                <b> Covid Statistics: </b>
              </h4>
              <p>{JSON.stringify(restriction.stats)}</p>
            </div>
          </div>
        </div>
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
