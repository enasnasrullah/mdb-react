import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Box, Stack, Grid, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { getDetailsRequest } from "../store/Trending/actions";
import { BACKDROP_PATH, POSTER_PATH } from "../utils/constants";
import { ConvertHoursToMins } from "../utils/helpers";

const Details = () => {
  const details = useSelector((state) => state.trendingReducers.details);
  const { id, type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getDetailsRequest({
        media_type: type,
        item_id: id,
      })
    );
  }, [type, id]);

  return (
    <Stack sx={{ position: "relative" }}>
      <Box sx={{ display: { xs: "none", sm: "block", paddingTop: "4rem" } }}>
        <img
          src={BACKDROP_PATH + details?.backdrop_path}
          width="100%"
          height="500px"
          alt={details?.title}
        />
      </Box>
      <Box sx={{ position: "absolute", top: "33%" }}>
        <Grid
          container
          spacing={2}
          columns={16}
          sx={{
            padding: { lg: "4rem 5rem", md: "3rem 5rem", xs: "5rem 2rem" },
          }}
        >
          <Grid item md={6} xs={14}>
            <img
              src={POSTER_PATH + details?.poster_path}
              alt="poster"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item md={10} xs={16}>
            <Typography
              sx={{
                color: { xs: "black", sm: "white" },
                paddingTop: { xs: "1rem", sm: "3rem" },
                fontWeight: "600",
                fontSize: "1.2rem",
              }}
            >
              {moment(details?.release_date).year()}
            </Typography>
            <Typography
              sx={{
                color: { xs: "black", sm: "white" },
                fontWeight: "600",
                fontSize: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              {details?.title}
            </Typography>
            <Typography
              sx={{
                color: { xs: "black", sm: "white" },
                fontSize: ".8rem",
                marginBottom: "1rem",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur beatae dolores excepturi quae dicta vitae sequi,
              provident odio suscipit, aperiam consectetur nobis repudiandae sit
              reiciendis delectus officiis nihil dolor eligendi.
            </Typography>
            <Stack sx={{ flexDirection: { xs: "column", sm: "row" } }}>
              <Box
                sx={{
                  borderRight: "1px solid white ",
                  color: { xs: "black", sm: "white" },
                  paddingTop: { xs: "2rem", sm: "0" },
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: { xs: "1rem" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "4rem", sm: "2rem" },
                    height: { xs: "4rem", sm: "2rem" },
                    border: { xs: "1px solid black", sm: "1px solid white" },
                    display: " flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <PlayArrowIcon />
                </Box>
                <Typography sx={{ margin: " 0 1rem" }}>
                  WATCH THE TRIALER
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: { xs: "black", sm: "white" },
                    padding: "0 1rem",
                  }}
                >
                  {ConvertHoursToMins(details?.runtime)}
                </Typography>
                <FiberManualRecordIcon
                  sx={{
                    color: { xs: "black", sm: "white" },
                    fontSize: ".5rem",
                  }}
                />
                <Typography
                  sx={{
                    color: { xs: "black", sm: "white" },
                    marginLeft: ".5rem",
                  }}
                >
                  {details?.genres?.map((gener) => gener.name + ",")}
                </Typography>
                <FiberManualRecordIcon
                  sx={{
                    color: { xs: "black", sm: "white" },
                    fontSize: ".5rem",
                  }}
                />
                <Typography
                  sx={{
                    color: { xs: "black", sm: "white" },
                    marginLeft: ".5rem",
                  }}
                >
                  {moment(details?.release_date).format("LL")}
                </Typography>
              </Box>
            </Stack>
            <Stack
              justifyContent="space-between"
              sx={{
                marginTop: { xs: "1rem", sm: "7rem" },
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "right", sm: "center" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRight: { xs: "none", sm: "1px solid gray" },
                    marginRight: "1rem",
                  }}
                >
                  <Typography sx={{ fontSize: "2rem", fontWeight: "900" }}>
                    {details?.vote_average.toFixed(1)}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: ".8rem",
                      paddingTop: ".5rem",
                      paddingRight: "1rem",
                    }}
                  >
                    IMDB
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "gray" }}>Status</Typography>
                  <Typography sx={{ fontWeight: "800" }}>
                    {details?.status}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "black",
                    width: { xs: "9rem", sm: "3rem" },
                    height: { xs: "4rem", sm: "2rem" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <AddIcon sx={{ color: "white", fontSize: "1rem" }} />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "black",
                    width: { xs: "9rem", sm: "3rem" },
                    height: { xs: "4rem", sm: "2rem" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    margin: "1rem",
                  }}
                >
                  <FavoriteIcon sx={{ color: "white", fontSize: "1rem" }} />
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};
export default Details;
