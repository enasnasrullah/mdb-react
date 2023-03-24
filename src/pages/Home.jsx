import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Stack, Typography, Grid } from "@mui/material";

import Filter from "../components/Filter";
import Search from "../components/search";
import Card from "../components/card";

import {
  getTrendingRequest,
  getSearchDataRequest,
} from "../store/Trending/actions";

const Home = () => {
  const list = useSelector((state) => state.trendingReducers.list);
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setSearchValue] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingRequest(filterValue));
  }, [filterValue]);

  useEffect(() => {
    dispatch(getSearchDataRequest(searchValue));
  }, [searchValue]);

  return (
    <Box sx={{ paddingTop: "4rem" }}>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        sx={{
          flexDirection: { lg: "row", md: "row", xs: "column" },
          padding: { lg: "4rem 5rem", md: "3rem 5rem", xs: "3rem 1rem" },
          backgroundColor: "#F5F5F5",
          width: "100%",
        }}
      >
        <Search
          setSearchValue={setSearchValue}
          placeholder="Find movies Tv shows documentary and more..."
        />
        <Filter setFilterValue={setFilterValue} />
      </Stack>

      <Typography
        sx={{
          padding: { lg: "2rem 5rem", md: "2rem 5rem", xs: "2rem 1rem" },
          fontSize: "1.2rem",
          fontWeight: "800",
        }}
      >
        Latest Movies & TV Shows
      </Typography>
      <Grid
        container
        spacing={2}
        columns={16}
        sx={{ padding: { lg: "4rem 5rem", md: "3rem 5rem", xs: "3rem 2rem" } }}
      >
        {list.map((item) => (
          <Grid item md={4} xs={8} key={item.id}>
            <Card item={item} filterValue={filterValue} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Home;
