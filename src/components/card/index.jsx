import { Box, Stack, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

import { POSTER_PATH, BACKDROP_PATH } from "../../utils/constants";
import placeholder from "../../assets/placeholder.png";
import { ROUTE_PATHS } from "../../routes/RoutesPaths";

const Card = ({ item, filterValue }) => {
  const history = useHistory();

  const viewDetails = () => {
    if (item?.media_type !== "person") {
      history.push(
        ROUTE_PATHS.viewDetails
          .replace(":id", item?.id)
          .replace(":type", item.media_type)
      );
    }
  };

  const backgroundimage = () => {
    var path = null;
    if (item?.poster_path || item?.profile_path) {
      path = `url(${POSTER_PATH}${item?.poster_path || item?.profile_path})`;
    } else if (item?.backdrop_path) {
      path = `url(${BACKDROP_PATH}${item?.backdrop_path})`;
    } else {
      path = `url(${placeholder})`;
    }
    return path;
  };

  return (
    <Stack
      sx={{
        position: "relative",
        cursor: filterValue !== "person" ? "pointer" : "unset",
      }}
      onClick={() => {
        viewDetails();
      }}
    >
      <Box
        sx={{
          backgroundImage: backgroundimage(),
          height: "22rem",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "#24B9D8",
          width: "2rem",
          textAlign: "center",
          position: "absolute",
          right: "0",
        }}
      >
        {item?.vote_average?.toFixed(1) || item?.popularity?.toFixed(1)}
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "600",
          margin: ".5rem 0 2rem 0",
        }}
      >
        {item?.name || item?.title}
      </Typography>
    </Stack>
  );
};
export default Card;
