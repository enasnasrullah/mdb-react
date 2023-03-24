import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Filter = ({ setFilterValue }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
    setFilterValue(value);
  };

  return (
    <Box
      sx={{
        border: "1px solid #b3b0b0",
        borderRadius: ".2rem",
        width: {
          md: "unset",
          xs: "90%",
        },
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "black",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FilterListIcon sx={{ display: { xs: "none", md: "block" } }} />
        <Typography>Media Type</Typography>
        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiMenu-list": {
            width: "150px",
          },
        }}
      >
        <MenuItem onClick={() => handleClose("movie")}>Movie</MenuItem>
        <MenuItem onClick={() => handleClose("tv")}>TV</MenuItem>
        <MenuItem onClick={() => handleClose("person")}>Person</MenuItem>
      </Menu>
    </Box>
  );
};
export default Filter;
