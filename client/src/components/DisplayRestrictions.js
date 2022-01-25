import { Skeleton } from "@mui/material";

/**
 *
 * @param {*} status
 * Display covid restrictions and stats or a loading skeleton if data is still being fetched
 */
export const DisplayRestrictions = function (props) {
  const { status, restriction } = props;
  if (!status) {
    return (
      <>
        <div>{JSON.stringify(restriction.restrictions)}</div>
        <div>{JSON.stringify(restriction.stats)}</div>
      </>
    );
  } else {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  }
};
